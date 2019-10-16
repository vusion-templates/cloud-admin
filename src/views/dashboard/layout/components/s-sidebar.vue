<template>
    <u-sidebar collapsible expand-trigger="click">
        <template v-for="(navGroup, index) in navConfig">
            <u-sidebar-group v-if="navGroup.children" :title="navGroup.title" :key="navGroup.title" :class="$style.navGroup">
                <template v-for="(nav, index2) in navGroup.children">
                    <s-sidebar :class="$style.sidebar" v-if="nav.subnav" :nav-config="nav.subnav" :key="index2"></s-sidebar>
                    <u-sidebar-item v-else :key="nav.label" :disabled="nav.disabled" :to="nav.to" :href="nav.href" :target="nav.href ? '_blank' : '_self'">
                        <i-icon :name="nav.icon" v-if="nav.icon"></i-icon>{{ nav.label }}</u-sidebar-item>
                </template>
            </u-sidebar-group>
            <u-sidebar-divider v-else-if="navGroup === '|'" :key="index"></u-sidebar-divider>
            <u-sidebar-item v-else :key="navGroup.label" :disabled="navGroup.disabled" :to="navGroup.to" :href="navGroup.href" :target="navGroup.href ? '_blank' : '_self'">
                <i-icon :name="navGroup.icon" v-if="navGroup.icon"></i-icon>{{ navGroup.label }}</u-sidebar-item>
        </template>
    </u-sidebar>
</template>
<script>
export default {
    name: 's-sidebar',
    props: {
        navConfig: Array,
    },
};
</script>
<style module>
.navGroup[disabled] {
    cursor: not-allowed;
}
.sidebar {
    margin-left: 10px;
}
</style>
