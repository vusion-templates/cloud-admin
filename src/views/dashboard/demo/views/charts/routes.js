import { LWrapper } from 'cloud-ui.vusion';
export default {
    path: 'charts',
    component: LWrapper,
    meta: {
        title: '图表',
        crumb: '图表',
    },
    children: [
        { path: '', redirect: 'echarts' },
        {
            path: 'echarts',
            component: () => import(/* webpackChunkName: 'demo' */ './views/echarts.vue'),
            meta: {
                title: 'ECharts',
                crumb: 'ECharts',
            },
        },
    ],
};
