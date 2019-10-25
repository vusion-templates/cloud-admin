export default {
    path: 'form',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        title: '表单',
        crumb: {
            label: '表单',
        },
    },
    children: [
        {
            path: '',
            redirect: '/form/normal',
        },
        {
            path: 'setting',
            component: () => import(/* webpackChunkName: 'demo' */ './views/setting.vue'),
            meta: {
                crumb: {
                    label: '设置页',
                },
                title: '设置页',
            },
        },
        {
            path: 'normal',
            component: () => import(/* webpackChunkName: 'demo' */ './views/form.vue'),
            meta: {
                title: '标准表单',
                crumb: {
                    label: '标准表单',
                },
            },
        },
    ],
};
