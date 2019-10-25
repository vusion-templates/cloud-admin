import { sortedModulesConfig } from '../modulesConfig';

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
                    label: 'Cloud UI',
                    href: 'https://vusion.github.io/cloud-ui/components/quickstart',
                },
                {
                    label: 'Vusion 官网',
                    href: 'https://vusion.github.io',
                },
                '|',
                {
                    label: '模板文档',
                    href: 'https://vusion-templates.github.io/cloud-admin-site',
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/vusion-templates/cloud-admin',
                },
            ],
            sidebarConfig: sortedModulesConfig.map((item) => item.module ? item.sideNav : item).filter((item) => item.exist !== false),
        };
    },
};
