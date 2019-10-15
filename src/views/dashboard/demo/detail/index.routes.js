import Wrapper from '@/global/utils/wrapComponent';
import Detail from './views/detail.vue';
import DetailInfo from './views/detail/info.vue';
import DetailMonitor from './views/detail/monitor.vue';
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
            path: 'detail',
            component: Detail,
            meta: {
                title: '详情页',
                crumb: {
                    label: '详情页',
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
                    component: DetailInfo,
                },
                {
                    path: 'monitor',
                    name: 'demo.detail.monitor',
                    component: DetailMonitor,
                },
            ],
        },

    ],
};
