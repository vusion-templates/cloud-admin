export default {
    path: 'chart',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        crumb: {
            label: '图表',
            readonly: true,
        },
    },
    children: [
        {
            path: 'echarts',
            component: () => import(/* webpackChunkName: 'demo' */ './views/echarts.vue'),
            meta: {
                crumb: {
                    label: 'Echarts',
                },
                title: 'Echarts',
            },
        },
    ],
};
