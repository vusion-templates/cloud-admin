export default {
    path: 'exception',
    component: require('@/global/layouts/l-wrapper.vue').default,
    children: [
        {
            path: '404',
            name: '404',
            component: () => import(/* webpackChunkName: 'exception' */ './views/404.vue'),
            meta: {
                title: '抱歉，你访问的页面不存在。',
            },
        },
        {
            path: '500',
            name: '500',
            component: () => import(/* webpackChunkName: 'exception' */ './views/500.vue'),
            meta: {
                title: '抱歉，服务出现错误。',
            },
        },
    ],
};
