export default {
    path: 'demo',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        crumb: {
            title: 'demo',
            readonly: true,
        },
    },
    children: [
        {
            path: 'detail',
            component: () => import(/* webpackChunkName: 'demo' */ './views/detail.vue'),
            meta: {
                title: '详情页',
                crumb: {
                    title: '详情页',
                },
            },
            children: [
                {
                    name: 'demo.detail',
                    path: '',
                    redirect: '/demo/detail/info',
                },
                {
                    path: 'info',
                    name: 'demo.detail.info',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/detail/info.vue'),
                },
                {
                    path: 'monitor',
                    name: 'demo.detail.monitor',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/detail/monitor.vue'),
                },
            ],
        },

    ],
};
