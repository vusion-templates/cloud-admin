<template>
    <div>
        <u-page-sum>
            <u-link href="https://github.com/microsoft/monaco-editor">monaco 代码编辑器</u-link>
            以及
            <u-link href="https://github.com/markdown-it/markdown-it">markdown 预览</u-link>
        </u-page-sum>
        <u-loading v-show="!libLoad.status"></u-loading>
        <div v-show="libLoad.status">
            <u-grid-layout gap="normal">
                <u-grid-layout-row :repeat="2">
                    <u-grid-layout-column :span="1">
                        <u-block>编辑</u-block>
                        <monaco-editor ref="editor" @change="change($event)" :class="$style.editor" v-model="code" language="markdown"></monaco-editor>
                    </u-grid-layout-column>
                    <u-grid-layout-column :span="1">
                        <u-block>只读</u-block>
                        <monaco-editor ref="readonlyEditor" :class="$style.editor" v-model="code" language="markdown" @editorDidMount="readonlyEditor"></monaco-editor>
                    </u-grid-layout-column>
                </u-grid-layout-row>
                <u-grid-layout-row :repeat="2">
                    <u-grid-layout-column :span="1">
                        <u-block>预览</u-block>
                        <div v-if="preview" v-html="preview" :class="$style.editor"></div>
                    </u-grid-layout-column>
                    <u-grid-layout-column :span="1">
                        <u-block>文本</u-block>
                        <pre>{{ content }}</pre>
                    </u-grid-layout-column>
                </u-grid-layout-row>
            </u-grid-layout>
        </div>
    </div>
</template>
<script>
let markdownIt;
const libLoad = {
    status: false,
};
export default {
    components: {
        MonacoEditor: () => Promise.all([
            import(/* webpackChunkName: "monaco" */ 'vue-monaco'),
            import(/* webpackChunkName: "markdown" */ 'markdown-it'),
        ]).then(([component, markdownItWrap]) => {
            markdownIt = markdownItWrap.default;
            libLoad.status = true;
            return component;
        }),
    },
    data() {
        const code = `# head1

## head2

+ li1
+ li2

\`\`\`javascript
const a = 1;
\`\`\`
`;
        return {
            code,
            content: code,
            libLoad,
            preview: '',
        };
    },
    watch: {
        'libLoad.status': {
            handler(status) {
                if (status) {
                    if (!this._md) {
                        this._md = markdownIt();
                    }
                    this.updateContent(this.content);
                }
            },
            immediate: true,
        },
        content(content) {
            if (this._md) {
                this.updateContent(content);
            }
        },
    },
    methods: {
        change(event) {
            this.content = event;
        },
        updateContent(content) {
            this.preview = this._md.render(content);
        },
        readonlyEditor(editor) {
            editor.updateOptions({ readOnly: true });
        },
    },
};
</script>
<style module>
.editor {
    height: 400px;
}
</style>
