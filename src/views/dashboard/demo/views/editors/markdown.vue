<template>
    <div>
        <u-page-summary>
            <u-link href="https://github.com/nhn/tui.editor">tui.editor 编辑器</u-link>
            以及
            <u-link href="https://github.com/nhn/toast-ui.vue-editor">toast-ui.vue-editor</u-link>
        </u-page-summary>
        <u-loading v-show="!libLoad.status"></u-loading>
        <div v-show="libLoad.status">
            <u-grid-layout gap="normal">
                <u-grid-layout-row :repeat="1">
                    <u-grid-layout-column :span="1">
                        <u-block>编辑</u-block>
                        <u-markdown-editor ref="editor" :class="$style.editor" :initial-value="content" @load="onEditorLoad" @change="change($event)"></u-markdown-editor>
                    </u-grid-layout-column>
                </u-grid-layout-row>
                <u-grid-layout-row :repeat="2">
                    <u-grid-layout-column :span="1">
                        <u-block>预览</u-block>
                        <u-markdown-viewer ref="previewEditor" :class="$style.editor" :initial-value="content"></u-markdown-viewer>
                    </u-grid-layout-column>
                    <u-grid-layout-column :span="1">
                        <u-block>html</u-block>
                        <pre>{{ html }}</pre>
                    </u-grid-layout-column>
                </u-grid-layout-row>
            </u-grid-layout>
        </div>
    </div>
</template>
<script>
const libLoad = {
    status: false,
};
export default {
    components: {
        UMarkdownEditor: () => import(/* webpackChunkName: "markdown" */ './components/u-markdown').then((components) => {
            libLoad.status = true;
            return components.Editor;
        }),
        UMarkdownViewer: () => import(/* webpackChunkName: "markdown" */ './components/u-markdown').then((components) => {
            libLoad.status = true;
            return components.Viewer;
        }),
    },
    data() {
        const content = [
            '# Heading 1',
            '## Heading 2',
            '### Heading 3',
            '#### Heading 4',
            '##### Heading 5',
            '###### Heading 6',
            '    code block',
            '```js',
            'console.log("fenced code block");',
            '```',
            '<pre>**HTML block**</pre>',
            '* list',
            '    * list indented',
            '1. ordered',
            '2. list',
            '    1. ordered list',
            '    2. indented',
            '',
            '- [ ] task',
            '- [x] list completed',
            '',
            '[link](https://nhn.github.io/tui.editor/)',
            '> block quote',
            '---',
            'horizontal line',
            '***',
            '`code`, *italic*, **bold**, ~~strikethrough~~, <span style="color:#e11d21">Red color</span>',
            '|table|head|',
            '|---|---|',
            '|table|body|',
        ].join('\n');
        return {
            content,
            libLoad,
            html: '',
        };
    },
    watch: {
        content() {
            this.html = this.getHtml();
        },
    },
    methods: {
        change(event) {
            this.content = this.$refs.editor.editor.getMarkdown();
        },
        getHtml() {
            if (this.$refs.editor)
                return this.$refs.editor.invoke('getHtml');
        },
        onEditorLoad() {
            this.$nextTick(() => {
                this.html = this.getHtml();
            });
        },
    },
};
</script>
<style module>
.editor {
    height: 400px;
}
</style>
