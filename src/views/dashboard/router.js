import Vue from 'vue';
import VueRouter from 'vue-router';
import _ from 'lodash';
import appConfig from './app.config';

Vue.use(VueRouter);
const routes = [];

function importAll(r) {
    r.keys().forEach((key) => r(key).default && routes.push(r(key).default));
}
// 这里会解析 views/ 目录下 index.routes.js 文件，如果需要添加新的路由，请按此方案命名
importAll(require.context('./', true, /index\.routes\.js/));

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: 'demo' */ './layout/index.vue'),
            meta: {
                title: appConfig.title,
                crumb: {
                    label: '首页',
                    to: '/overview',
                },
            },
            children: [
                { path: '', redirect: '/overview' },
                ...routes,
            ],
        },
        { path: '*', beforeEnter(to, from, next) {
            next('/exception/404'); // 无法匹配的链接跳转到 404
        } },
    ],
});

// 权限验证
router.beforeEach((to, from, next) => {
    let called = false;
    const _next = function (...args) {
        if (called) {
            return;
        }
        called = true;
        next(...args);
    };
    to.matched.every((item) => {
        item.meta && item.meta.auth && item.meta.auth(to, from, _next);
        return !called;
    });
    _next();
});

// 自动修改 title
router.afterEach((to, from) => {
    const moduleRoute = to.matched.concat().reverse().find((item) => item.meta.title);
    if (moduleRoute) {
        const metaTitle = moduleRoute.meta.title;
        document.title = _.isFunction(metaTitle) ? metaTitle(to, from) : metaTitle;
    }
});

export default router;
