import Wrapper from '@/global/utils/wrapComponent';
import Code from './views/code.vue';
import Markdown from './views/markdown.vue';
import Editor from './views/rich-editor.vue';
import Brace from './views/code-brace.vue';
import Monaco from './views/code-monaco.vue';
export default {
    path: 'editor',
    component: Wrapper,
    meta: {
        crumb: {
            label: '编辑器',
            readonly: true,
        },
    },
    children: [
        {
            path: 'code',
            component: Code,
            meta: {
                crumb: {
                    label: '代码编辑器',
                    readonly: true,
                },
            },
            children: [
                {
                    path: '',
                    redirect: '/editor/code/monaco',
                },
                {
                    path: 'brace',
                    component: Brace,
                    meta: {
                        crumb: {
                            label: '代码编辑器(Brace)',
                        },
                        title: '代码编辑器(Brace)',
                    },
                },
                {
                    path: 'monaco',
                    component: Monaco,
                    meta: {
                        crumb: {
                            label: '代码编辑器(Monaco)',
                        },
                        title: '代码编辑器(Monaco)',
                    },
                },
            ],
        },
        {
            path: 'markdown',
            component: Markdown,
            meta: {
                crumb: {
                    label: 'Markdown 编辑器',
                },
            },
        },
        {
            path: 'rich-editor',
            component: Editor,
            meta: {
                crumb: {
                    label: '富文本编辑器',
                },
            },
        },
    ],
};
