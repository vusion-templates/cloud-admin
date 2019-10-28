import { sortedModules } from '../modules';

export default {
    components: {
        LDashboard: require('@/global/layouts/l-dashboard.vue').default,
        SLogo: require('./components/s-logo.vue').default,
        SNavbar: require('./components/s-navbar.vue').default,
        SNavbarRight: require('./components/s-navbar-right.vue').default,
        SSidebar: require('./components/s-sidebar.vue').default,
        SCrumb: require('./components/s-crumb.vue').default,
    },
    data() {
        return {
            logo: {
                sub: '模板',
            },
            userInfo: {
                username: 'username',
            },
            navbarConfig: [
                {
                    title: 'Cloud UI',
                    href: 'https://vusion.github.io/cloud-ui/components/quickstart',
                },
                {
                    title: 'Vusion 官网',
                    href: 'https://vusion.github.io',
                },
                '|',
                {
                    title: '模板文档',
                    href: 'https://vusion-templates.github.io/cloud-admin-site',
                },
                {
                    title: 'GitHub',
                    href: 'https://github.com/vusion-templates/cloud-admin',
                },
            ],
            sidebarConfig: sortedModules.map((item) => item.name ? item.sidebar : item).filter((item) => item.exist !== false),
        };
    },
};
