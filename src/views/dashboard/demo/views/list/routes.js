export default {
    path: 'list',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        crumb: {
            title: 'list',
            type: 'text',
        },
    },
    children: [
        {
            path: 'basic',
            name: 'demo.list',
            component: () => import(/* webpackChunkName: 'demo' */ './views/list.vue'),
            meta: {
                title: '列表页',
                crumb: {
                    title: '列表页',
                    to: '/demo/basic',
                },
            },
        },
        {
            path: 'tabs',
            name: 'demo.tabsList',
            component: () => import(/* webpackChunkName: 'demo' */ './views/list.tabs.vue'),
            meta: {
                title: 'tab 列表',
                crumb: {
                    title: 'tab 列表',
                    readonly: true,
                },
            },
            children: [
                {
                    path: '',
                    redirect: '/demo/tabs/list',
                },
                {
                    path: 'localList',
                    name: 'demo.tabs.localList',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/list.local.vue'),
                    meta: {
                        title: '本地分页',
                        crumb: {
                            title: '本地分页',
                        },
                    },
                },
                {
                    path: 'list',
                    name: 'demo.tabs.list',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/list.vue'),
                    meta: {
                        title: '列表页',
                        crumb: {
                            title: '列表页',
                        },
                    },
                },
                {
                    path: 'noPageList',
                    name: 'demo.tabs.noPageList',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/list.noPage.vue'),
                    meta: {
                        title: '列表页(无分页)',
                        crumb: {
                            title: '列表页(无分页)',
                        },
                    },
                },
            ],

        },
        {
            path: 'localList',
            name: 'demo.localList',
            component: () => import(/* webpackChunkName: 'demo' */ './views/list.local.vue'),
            meta: {
                title: '本地分页',
                crumb: {
                    title: '本地分页',
                    to: '/demo/localList',
                },
            },
        },
    ],
};
