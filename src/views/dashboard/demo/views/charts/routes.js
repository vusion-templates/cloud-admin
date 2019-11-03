export default {
    path: 'charts',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        title: '图表',
    },
    children: [
        { path: '', redirect: 'echarts' },
        {
            path: 'echarts',
            component: () => import(/* webpackChunkName: 'demo' */ './views/echarts.vue'),
            meta: {
                title: 'Echarts',
            },
        },
    ],
};
