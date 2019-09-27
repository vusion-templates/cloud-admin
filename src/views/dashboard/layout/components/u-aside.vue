<template>
    <aside :class="$style.side">
        <u-sidebar collapsible expand-trigger="click">
            <template v-for="(navGroup, index) in navConfig">
                <u-sidebar-group v-if="navGroup.children" :title="navGroup.title" :key="navGroup.title" :class="$style.navGroup">
                    <u-sidebar-item v-for="nav in navGroup.children" :key="nav.label" :disabled="nav.disabled" :to="nav.to" :href="nav.href" :target="nav.href ? '_blank' : '_self'">
                        <i-icon :name="nav.icon" v-if="nav.icon"></i-icon>{{ nav.label }}</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-divider v-else-if="navGroup === '|'" :key="index"></u-sidebar-divider>
                <u-sidebar-item v-else :key="navGroup.label" :disabled="navGroup.disabled" :to="navGroup.to" :href="navGroup.href" :target="navGroup.href ? '_blank' : '_self'">
                    <i-icon :name="navGroup.icon" v-if="navGroup.icon"></i-icon>{{ navGroup.label }}</u-sidebar-item>
            </template>
        </u-sidebar>
    </aside>
</template>
<script>
export default {
    props: {
        navConfig: Array,
    },
    data() {
        return {

        };
    },
};
</script>
<style module>

.side {
    width: $sidebar-width;
    position: absolute;
    top: $navbar-height;
    bottom: 0;
    overflow: hidden;
    font-size: 16px;
}
.navGroup[disabled] {
    cursor: not-allowed;
}
</style>
