<template>
    <div>
        <u-page-sum>
            <u-link href="https://github.com/thlorenz/brace">brace 代码编辑器</u-link>
        </u-page-sum>
        <u-loading v-show="!libLoad.status"></u-loading>
        <div v-show="libLoad.status">
            <u-grid-layout gap="normal">
                <u-grid-layout-row :repeat="2">
                    <u-grid-layout-column :span="1">
                        <u-block>编辑</u-block>
                        <x-ace-editor :class="$style.editor" v-bind="ace" @init="getEditor($event)" @change="getContent($event)"></x-ace-editor>
                    </u-grid-layout-column>
                    <u-grid-layout-column :span="1">
                        <u-block>只读</u-block>
                        <x-ace-editor :class="$style.editor" theme :options="options" :value="content"></x-ace-editor>
                    </u-grid-layout-column>
                </u-grid-layout-row>
                <u-grid-layout-row :repeat="2">
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
const libLoad = {
    status: false,
};
export default {
    components: {
        XAceEditor: () => import(/* webpackChunkName: "brace" */ '../components/u-brace').then((component) => {
            libLoad.status = true;
            return component;
        }),
    },
    data() {
        const ace = {
            value: `const tmp = 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
`,
            lang: 'javascript',
            autofocus: true,
            theme: 'monokai',
        };
        return {
            ace,
            content: ace.value,
            options: {
                readOnly: true,
            },
            libLoad,
        };
    },
    methods: {
        getEditor({ editor }) {
            this._editor = editor;
        },
        getContent({ value }) {
            this.content = value;
        },
    },
};
</script>
<style module>
.editor {
    height: 300px!important;
}
</style>
