<template>
    <component :is="rootName" collapsible>
        <template v-for="(group, index) in config">
            <u-sidebar-group v-if="group.children" :title="group.title" :key="group.title" :class="$style.group">
                <template v-for="(nav, index2) in group.children">
                    <s-sidebar :class="$style.sidebar" v-if="nav.subnav" :config="nav.subnav" :key="index2"></s-sidebar>
                    <u-sidebar-item v-else :key="nav.label" :disabled="nav.disabled" :to="nav.to" :href="nav.href" :target="nav.href ? '_blank' : '_self'">
                        <i-icon :name="nav.icon" v-if="nav.icon"></i-icon>{{ nav.label }}</u-sidebar-item>
                </template>
            </u-sidebar-group>
            <u-sidebar-divider v-else-if="group === '|'" :key="index"></u-sidebar-divider>
            <u-sidebar-item v-else :key="group.label" :disabled="group.disabled" :to="group.to" :href="group.href" :target="group.href ? '_blank' : '_self'">
                <i-icon :name="group.icon" v-if="group.icon"></i-icon>{{ group.label }}</u-sidebar-item>
        </template>
    </component>
</template>
<script>
export default {
    name: 's-sidebar',
    props: {
        config: Array,
        isSub: { type: Boolean, default: false },
    },
    computed: {
        rootName() {
            return this.isSub ? 'div' : 'u-sidebar';
        },
    },
};
</script>
<style module>
.group[disabled] {
    cursor: not-allowed;
}
.sidebar {
    margin-left: 10px;
}
</style>
