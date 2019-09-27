import Center from './views/center.vue';
import Setting from './views/setting.vue';
import Account from './views/index.vue';
import Security from './views/security.vue';
export default {
    path: 'account',
    component: Account,
    children: [
        {
            path: '',
            redirect: 'center',
        },
        {
            path: 'center',
            name: 'account.center',
            component: Center,
            meta: {
                title: '个人中心',
            },
        },
        {
            path: 'setting',
            name: 'account.setting',
            component: Setting,
            meta: {
                title: '个人设置',
            },
        },
        {
            path: 'security',
            name: 'account.security',
            component: Security,
            meta: {
                title: '安全设置',
            },
        },
    ],
};
