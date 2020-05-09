const path = require('path');
const pkg = require('./package.json');
const pages = require('./pages.json');

const isDevelopment = process.env.NODE_ENV === 'development';
const publicPathPrefix = process.env.SITE_TYPE === 'gh-pages' ? `https://vusion-templates.github.io/${pkg.name}` : '/';

const port = 8830;

const devServer = require('./webpack.dev-server')(port);
const proxy = devServer.proxy;
// vue-cli 对 proxy 不支持 context 的自定义
delete devServer.proxy;

const isMicro = !!process.env.MICRO_APP;
const webpackMicro = require('./webpack/micro');
const webpackDll = require('./webpack/dll');
const webpackStyle = require('./webpack/style');
const webpackHtml = require('./webpack/html');
const webpackEditor = require('./webpack/editor');
const webpackOptimization = require('./webpack/optimization');

if (isMicro) {
    webpackMicro.setup(pages);
}
const assetsDir = 'public';
let baseConfig = {
    publicPath: publicPathPrefix,
    assetsDir,
    productionSourceMap: false,
    transpileDependencies: [
        /atom-validator/,
        /vusion-utils/,
        /lodash/,
        'resize-detector',
        /cloud-ui\.vusion/,
        /vusion-micro-app/,
        /@cloud-ui/,
    ],
};
if (isMicro) {
    baseConfig = webpackMicro.config(baseConfig, port, isDevelopment);
}
const vueConfig = {
    ...baseConfig,
    pages,
    chainWebpack(config) {
        webpackHtml.chain(config);
        webpackOptimization.chain(config, isDevelopment, pages);

        if (isMicro) {
            webpackMicro.chain(config, isDevelopment);
        } else {
            webpackDll.chain(config, publicPathPrefix, isDevelopment);
        }
        webpackEditor.chain(config, vueConfig);
        webpackStyle.chain(config);
        config.output.jsonpFunction('webpackJsonp' + pkg.name);
    },
    devServer,
    pluginOptions: {
        proxy,
    },
};

module.exports = vueConfig;
