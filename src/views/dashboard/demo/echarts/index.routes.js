import Wrapper from '@/global/utils/wrapComponent';
import Echarts from './views/echarts.vue';
export default {
    path: 'chart',
    component: Wrapper,
    meta: {
        crumb: {
            label: '图表',
            readonly: true,
        },
    },
    children: [
        {
            path: 'echarts',
            component: Echarts,
            meta: {
                crumb: {
                    label: 'Echarts',
                },
                title: 'Echarts',
            },
        },
    ],
};
