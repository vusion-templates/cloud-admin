export default [
    {
        path: '/',
        component: require('./index.vue').default,
        children: [
            { path: '', redirect: 'overview' },
            ...require('@/global/utils/routerUtils').importSubRoutes(require.context('./', true, SUB_ROUTES_RE)),
        ],
    },
    { path: '*', beforeEnter(to, from, next) {
        next('/exception/404'); // 无法匹配的链接跳转到 404
    } },
];
