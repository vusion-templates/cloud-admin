<template>
    <header>
        <u-navbar :class="$style.nav">
            <slot name="logo" slot="left"></slot>
            <template v-for="(navGroup, index) in navConfig">
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
            <slot slot="right" name="headerRight"></slot>
        </u-navbar>
    </header>
</template>
<script>
export default {
    props: {
        navConfig: Array,
    },
};
</script>
<style module>
.nav {
    background: $sidebar-background-color;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: $navbar-height;
}
.nav .divider {
    margin-left: 0;
}
</style>
