import Wrapper from '@/global/utils/wrapComponent';
import Form from './views/form.vue';
import Setting from './views/setting.vue';
export default {
    path: 'form',
    component: Wrapper,
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
            component: Setting,
            meta: {
                crumb: {
                    label: '设置页',
                },
                title: '设置页',
            },
        },
        {
            path: 'normal',
            component: Form,
            meta: {
                title: '标准表单',
                crumb: {
                    label: '标准表单',
                },
            },
        },
    ],
};
