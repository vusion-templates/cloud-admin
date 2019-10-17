<template>
    <div :class="$style.root">
        <u-header :nav-config="headerNavConfig">
            <div :class="$style.logo" slot="logo">
                <u-logo href="#/" :class="$style.logoFix"></u-logo>
            </div>
            <u-header-right :user-info="userInfo" slot="headerRight"></u-header-right>
        </u-header>
        <u-aside :nav-config="sideNavConfig"></u-aside>
        <main :class="$style.main">
            <u-crumb :class="$style.crumb"></u-crumb>
            <div :class="$style.mainInner">
                <slot></slot>
            </div>
        </main>
    </div>
</template>
<script>
import UAside from './u-aside.vue';
import UHeader from './u-header.vue';
import UHeaderRight from './u-header-right.vue';
import UCrumb from './u-crumb.vue';

export default {
    components: {
        UAside,
        UHeader,
        UHeaderRight,
        UCrumb,
    },
    props: {
        sideNavConfig: Array,
        headerNavConfig: Array,
        userInfo: Object,
    },
    data() {
        return {
        };
    },
    methods: {

    },
};
</script>
<style module>
.root {
    position: relative;
    width: 100%;
    height: 100%;
}
.logo {
    text-align: center;
    width: $sidebar-width;
    margin-right: -40px;
}
.logoFix {
    margin-right: 14px;
}
.crumb {
    height: 60px;
    line-height: 60px;
    padding-left: 40px;
}
.main {
    position: absolute;
    right: 0;
    top: calc($navbar-height);
    bottom:0;
    left: $sidebar-width;
    overflow-y: scroll;
}
.mainInner {
    background-color: #fff;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
}
.crumb + .mainInner {
    padding-top: 0;
}
</style>
