<template>
    <u-navbar>
        <template #left><slot name="left"></slot></template>
        <template #default>
            <template v-for="(navGroup, index) in config">
                <u-navbar-dropdown v-if="navGroup.children" :title="navGroup.title" :key="navGroup.title">
                    <u-navbar-menu style="min-width: 150%">
                        <u-navbar-menu-item v-for="nav in navGroup.children" :key="nav.label" :disabled="nav.disabled" :to="nav.to" :href="nav.href" :target="nav.href ? '_blank' : '_self'">
                            {{ nav.label }}
                        </u-navbar-menu-item>
                    </u-navbar-menu>
                </u-navbar-dropdown>
                <u-navbar-divider v-else-if="navGroup === '|'" :key="index" :class="$style.divider"></u-navbar-divider>
                <u-navbar-item v-else :key="navGroup.label" :disabled="navGroup.disabled" :to="navGroup.to" :href="navGroup.href" :target="navGroup.href ? '_blank' : '_self'">{{ navGroup.label }}</u-navbar-item>
            </template>
        </template>
        <template #right><slot name="right"></slot></template>
    </u-navbar>
</template>
<script>
export default {
    props: {
        config: Array,
    },
};
</script>
<style module>
.nav .divider {
    margin-left: 0;
}
</style>
