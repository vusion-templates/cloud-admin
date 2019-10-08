const path = require('path');
const webpack = require('webpack');

const basePath = 'pub/vue/';
module.exports = (env = {}) => {
    const dir = path.resolve(__dirname, './dll');
    let config = {
        filename: '[name].js',
        manifest: '[name].manifest.json',
    };
    if (env.NODE_ENV !== 'development') {
        config = {
            filename: '[name].online.js',
            manifest: '[name].manifest.online.json',
        };
    }
    return {
        mode: env.NODE_ENV,
        entry: {
            vendor: [
                'babel-polyfill',
                'lodash',
                'vue',
                'vue-router',
                // 'vue-i18n',
            ],
        },
        output: {
            filename: config.filename,
            path: dir,
            publicPath: '/' + basePath,
            library: '[name]',
        },
        resolve: {
            alias: {
                vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
                'vue-i18n$': path.resolve(__dirname, 'node_modules/vue-i18n/dist/vue-i18n.esm.js'),
                'vue-router$': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.esm.js'),
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV),
                },
            }),
            new webpack.DllPlugin({
                path: path.join(dir, config.manifest),
                name: '[name]',
            }),
            new webpack.HashedModuleIdsPlugin(),
        ],
    };
};
