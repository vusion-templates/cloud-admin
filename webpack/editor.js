module.exports = {
    chain(config, vueConfig) {
        config.plugin('monaco-editor').use(require('monaco-editor-webpack-plugin'), [{
            languages: ['javascript', 'json', 'markdown', 'typescript'],
            publicPath: vueConfig.publicPath, // fix for cross domain
            filename: 'public/js/[name].[hash:8].worker.js',
        }]);
    },
};
