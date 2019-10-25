export default {
    path: 'editor',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        crumb: {
            label: '编辑器',
            readonly: true,
        },
    },
    children: [
        {
            path: 'code',
            component: () => import(/* webpackChunkName: 'demo' */ './views/code.vue'),
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
                    component: () => import(/* webpackChunkName: 'demo' */ './views/code-brace.vue'),
                    meta: {
                        crumb: {
                            label: '代码编辑器(Brace)',
                        },
                        title: '代码编辑器(Brace)',
                    },
                },
                {
                    path: 'monaco',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/code-monaco.vue'),
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
            component: () => import(/* webpackChunkName: 'demo' */ './views/markdown.vue'),
            meta: {
                crumb: {
                    label: 'Markdown 编辑器',
                },
            },
        },
        {
            path: 'rich-editor',
            component: () => import(/* webpackChunkName: 'demo' */ './views/rich-editor.vue'),
            meta: {
                crumb: {
                    label: '富文本编辑器',
                },
            },
        },
    ],
};
