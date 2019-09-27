<template>
    <u-crumb v-if="crumbs.length > 1">
        <template v-for="item in crumbs">
            <u-crumb-item v-bind="item" :key="item.label">{{ item.label }}</u-crumb-item>
        </template>
    </u-crumb>
</template>
<script>
import _ from 'lodash';
export default {
    data() {
        return {
            crumbs: [],
        };
    },
    watch: {
        $route: {
            handler(routes) {
                const matched = routes.matched || [];
                const result = [];
                matched.forEach((route) => {
                    let crumb = route.meta && route.meta.crumb;
                    if (crumb) {
                        crumb = _.isFunction(crumb) ? crumb(routes) : crumb;
                        if (!crumb.to && !crumb.readonly) {
                            crumb.to = route.path;
                        }
                        crumb.current = crumb.to === routes.path;
                        result.push(crumb);
                    }
                });
                this.crumbs = result;
            },
            immediate: true,
        },
    },
};
</script>
