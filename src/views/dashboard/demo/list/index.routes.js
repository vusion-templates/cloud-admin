import Wrapper from '@/global/utils/wrapComponent';
import List from './views/list.vue';
import localList from './views/list.local.vue';
import tabsList from './views/list.tabs.vue';
import noPageList from './views/list.noPage.vue';
export default {
    path: 'demo',
    component: Wrapper,
    meta: {
        crumb: {
            label: 'demo',
            readonly: true,
        },
    },
    children: [
        {
            path: 'list',
            name: 'demo.list',
            component: List,
            meta: {
                title: '列表页',
                crumb: {
                    label: '列表页',
                    to: '/demo/list',
                },
            },
        },
        {
            path: 'tabs',
            name: 'demo.tabsList',
            component: tabsList,
            meta: {
                title: 'tab 列表',
                crumb: {
                    label: 'tab 列表',
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
                    component: localList,
                    meta: {
                        title: '本地分页',
                        crumb: {
                            label: '本地分页',
                        },
                    },
                },
                {
                    path: 'list',
                    name: 'demo.tabs.list',
                    component: List,
                    meta: {
                        title: '列表页',
                        crumb: {
                            label: '列表页',
                        },
                    },
                },
                {
                    path: 'noPageList',
                    name: 'demo.tabs.noPageList',
                    component: noPageList,
                    meta: {
                        title: '列表页(无分页)',
                        crumb: {
                            label: '列表页(无分页)',
                        },
                    },
                },
            ],

        },
        {
            path: 'localList',
            name: 'demo.localList',
            component: localList,
            meta: {
                title: '本地分页',
                crumb: {
                    label: '本地分页',
                    to: '/demo/localList',
                },
            },
        },
    ],
};
