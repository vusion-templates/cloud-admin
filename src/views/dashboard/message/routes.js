export default {
    path: 'message',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        title: '系统通知',
    },
    children: [
        { path: '', redirect: 'list' },
        {
            path: 'list',
            name: 'message.list',
            component: () => import(/* webpackChunkName: 'demo' */ './views/message.vue'),
            meta: {
                title: '通知列表',
            },
        },
        {
            path: 'detail',
            name: 'message.detail',
            component: () => import(/* webpackChunkName: 'demo' */ './views/message.detail.vue'),
            meta: {
                title: '通知详情',
            },
        },
    ],
};
