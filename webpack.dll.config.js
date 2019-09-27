const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const basePath = 'pub/vue/';
module.exports = (env = {}) => {
    const dir = path.resolve(__dirname, './dll');
    return {
        mode: env.NODE_ENV,
        entry: {
            vendor: ['babel-polyfill', 'lodash', 'vue', 'vue-i18n', 'vue-router'],
        },
        output: {
            filename: env.NODE_ENV === 'development' ? '[name].js' : '[name].online.js',
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
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {

                    },
                }),
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV),
                },
            }),
            new webpack.DllPlugin({
                path: path.join(dir, env.NODE_ENV === 'development' ? '[name].manifest.json' : '[name].manifest.online.json'),
                name: '[name]',
            }),
            new webpack.HashedModuleIdsPlugin(),
        ],
    };
};
