<template>
    <u-layout v-bind="layout">
        <router-view></router-view>
    </u-layout>
</template>
<script>
import ULayout from './components/u-layout.vue';
import { sortModuleConfig } from '../moduleConfig';
export default {
    components: {
        ULayout,
    },
    data() {
        return {
            layout: {
                userInfo: {
                    username: 'cloudUser',
                },
                headerNavConfig: [
                    {
                        label: 'Cloud UI',
                        href: 'https://vusion.github.io/cloud-ui/components/quickstart',
                    },
                    {
                        label: 'Proto UI',
                        href: 'https://vusion.github.io/proto-ui/components/quickstart',
                    },
                    '|',
                    {
                        label: '文档',
                        href: 'https://vusion-templates.github.io/cloud-admin-site',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/vusion-templates/cloud-admin',
                    },
                ],
                sideNavConfig: sortModuleConfig.map((item) => item.module ? item.sideNav : item).filter((item) => item.exist !== false),
            },
        };
    },
};
</script>
<style module>

</style>
