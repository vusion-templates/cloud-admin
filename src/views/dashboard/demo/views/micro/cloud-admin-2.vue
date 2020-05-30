<template>
    <u-micro
        :slave-name="slaveName"
        :entries="entries">
    </u-micro>
</template>
<script>
import microMixin from '@/global/mixins/micro';
export default {
    mixins: [microMixin],
    data() {
        return {
            slaveName: 'demo.cloud-admin-lite',
            entries: 'https://vusion-templates.github.io/cloud-admin-lite/public/js/latest.js?t=' + (new Date() - 0),
            // entries: 'http://localhost:8820/latest.js?t=' + (new Date() - 0),
        };
    },
    methods: {

    },
};
</script>
