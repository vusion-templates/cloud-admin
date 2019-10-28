export default {
    path: 'chart',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        crumb: {
            title: '图表',
            readonly: true,
        },
    },
    children: [
        {
            path: 'echarts',
            component: () => import(/* webpackChunkName: 'demo' */ './views/echarts.vue'),
            meta: {
                crumb: {
                    title: 'Echarts',
                },
                title: 'Echarts',
            },
        },
    ],
};
