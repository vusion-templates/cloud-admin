import Wrapper from '@/global/layouts/l-wrapper.vue';
export default {
    path: 'form',
    component: Wrapper,
    meta: {
        title: '表单',
    },
    children: [
        {
            path: '',
            redirect: 'basic',
        },
        {
            path: 'basic',
            component: () => import(/* webpackChunkName: 'demo' */ './views/basic.vue'),
            meta: {
                title: '基础表单',
            },
        },
        {
            path: 'setting',
            component: () => import(/* webpackChunkName: 'demo' */ './views/setting.vue'),
            meta: {
                title: '设置页',
            },
        },
    ],
};
