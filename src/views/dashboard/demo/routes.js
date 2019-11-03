export default {
    path: 'demo',
    component: require('@/global/layouts/l-wrapper.vue').default,
    children: [
        {
            path: '',
            redirect: 'list',
        },
        ...require('@/global/utils/routerUtils').importSubRoutes(require.context('./', true, SUB_ROUTES_RE)),
    ],
};
