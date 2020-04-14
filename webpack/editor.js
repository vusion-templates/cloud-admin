module.exports = {
    chain(config) {
        config.plugin('monaco-editor').use(require('monaco-editor-webpack-plugin'), [{
            languages: ['javascript', 'json', 'markdown', 'typescript'],
        }]);
    },
};
