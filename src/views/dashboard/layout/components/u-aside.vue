<template>
    <aside :class="$style.side">
        <u-sidebar :nav-config="navConfig"></u-sidebar>
    </aside>
</template>
<script>
import USidebar from './s-sidebar.vue';
export default {
    components: {
        USidebar,
    },
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
</style>
