<template>
    <div>
        <u-tabs router>
            <u-tab v-for="tab in tabs" :title="tab.title" :to="tab.to" :key="tab.to"></u-tab>
        </u-tabs>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: [
                {
                    title: 'Monaco',
                    to: '/demo/editors/code/monaco',
                },
                {
                    title: 'Brace',
                    to: '/demo/editors/code/brace',
                },
            ],
        };
    },
};
</script>
