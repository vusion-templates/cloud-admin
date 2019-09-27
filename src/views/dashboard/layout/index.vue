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
                        label: 'cloud-ui 组件库',
                        href: 'https://vusion.github.io/cloud-ui/components/quickstart',
                    },
                    {
                        label: 'proto-ui 组件库',
                        href: 'https://vusion.github.io/proto-ui/components/quickstart',
                    },
                    '|',
                    {
                        label: 'cloud-admin',
                        href: 'https://github.com/vusion/cloud-admin',
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
