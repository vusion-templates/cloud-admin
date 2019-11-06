import { sortedModules } from '../../../modules';
import LDashboard from '@/global/layouts/l-dashboard.vue';
import SLogo from '../../components/s-logo.vue';
import SNavbar from '../../components/s-navbar.vue';
import SNavbarRight from '../../components/s-navbar-right.vue';
import SSidebar from '../../components/s-sidebar.vue';
import SCrumb from '../../components/s-crumb.vue';
export default {
    components: {
        LDashboard,
        SLogo,
        SNavbar,
        SNavbarRight,
        SSidebar,
        SCrumb,
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
            sidebarConfig: sortedModules.map((item) => item.module ? item.sidebar : item).filter((item) => item.exist !== false),
        };
    },
};
