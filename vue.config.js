const path = require('path');
const webpack = require('webpack');
const crypto = require('crypto');
const fs = require('fs');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const md5 = function (str, len = 16) {
    const md5 = crypto.createHash('md5');
    return md5.update(str).digest('hex').substr(0, len);
};
const basePath = 'public';
const publicPathPrefix = '/';
const host = 'localhost';
const port = 8810;
const devServer = {
    host,
    port,
    public: `http://${host}:${port}/index.html`,
    disableHostCheck: true,
    publicPath: publicPathPrefix + basePath,
    contentBase: __dirname,
    clientLogLevel: 'info',
};
const fixDll = function () {
    const content = fs.readFileSync(path.join(__dirname, './dll/vendor.online.js')).toString();
    const cache = './dll/.cache';
    const cacheRoot = path.join(__dirname, cache);
    if (!fs.existsSync(cacheRoot)) {
        fs.mkdirSync(cacheRoot);
    }
    const newPath = path.join(cache, `/vendor.${md5(content, 8)}.js`);
    fs.writeFileSync(path.join(__dirname, newPath), content);
    return newPath;
};
const proxy = devServer.proxy;
delete devServer.proxy;
const ISDEV = process.env.NODE_ENV === 'development';
const manifest = require(ISDEV ? './dll/vendor.manifest.json' : './dll/vendor.manifest.online.json');
const vueConfig = {
    outputDir: path.resolve(__dirname, basePath),
    publicPath: publicPathPrefix + basePath,
    assetsDir: undefined,
    productionSourceMap: false,
    transpileDependencies: [
        /atom-validator/,
        /vusion-utils/,
        /lodash/,
    ],
    pages: {
        index: {
            entry: './src/views/dashboard/index.js',
            template: path.join(__dirname, './src/templates/index.html'),
            filename: 'index.html',
            favicon: path.join(__dirname, './src/templates/favicon.ico'),
            title: 'Dashboard',
            inject: true,
            chunks: ['index'],
            chunksSortMode: 'manual',
        },
    },
    chainWebpack(config) {
        config.output.filename(ISDEV ? '[name].js' : '[name].[chunkhash:16].js');

        config.module.rule('ftl')
            .test(/\.ftl$/i)
            .use('underscore-template')
            .loader('underscore-template-loader')
            .options({
                attributes: ['img:src', 'link:style', 'script:src'],
                root: '~',
                engine: 'lodash',
                withImports: false,
                parseDynamicRoutes: false,
                parseMacros: false,
                interpolate: '<%=([\\s\\S]+?)%>',
            });

        config.plugins.delete('preload');
        config.plugins.delete('prefetch');

        config.plugin('dll').use(webpack.DllReferencePlugin, [{ manifest }]);

        if (!ISDEV) {
            config.plugin('namedchunk').use(webpack.NamedChunksPlugin, [
                (chunk) => {
                    if (chunk.name)
                        return chunk.name;
                    const seen = new Set();
                    const nameLength = 4;
                    const modules = Array.from(chunk.modulesIterable);
                    if (modules.length > 1) {
                        const joinedHash = md5(modules.map((m) => m.id).join('_'));
                        let len = nameLength;
                        while (seen.has(joinedHash.substr(0, len)))
                            len++;
                        seen.add(joinedHash.substr(0, len));
                        return `chunk-${joinedHash.substr(0, len)}`;
                    } else
                        return modules[0].id;
                },
            ]);
        } else
            config.plugin('namedmodule').use(webpack.NamedModulesPlugin);

        const entryKeys = Object.keys(config.entryPoints.entries());
        if (config.plugins.has('icon-font-plugin')) {
            config.plugin('icon-font-plugin').tap(([opts]) => {
                opts.fontName = 'font-' + entryKeys.join('_').replace(/-/, '_');
                return [opts];
            });
        }
        if (config.plugins.has('css-sprite-plugin')) {
            config.plugin('css-sprite-plugin').tap(([opts]) => {
                opts.filename = '[name].[hash:16].[ext]';
                return [opts];
            });
        }
        let dllPath = './dll/vendor.js';
        if (!ISDEV) {
            dllPath = fixDll();
        }
        entryKeys.forEach((entryKey) => {
            config.plugin(`${entryKey}-dll`).after(`html-${entryKey}`).use(AddAssetHtmlPlugin, [{
                hash: !ISDEV,
                filepath: path.resolve(__dirname, dllPath),
            }]).end();
        });
    },
    devServer,
    pluginOptions: {
        proxy,
    },
};
module.exports = vueConfig;
