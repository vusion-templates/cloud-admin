import '@/global/styles/index.css';
import 'babel-polyfill';
import Vue from 'vue';
import _ from 'lodash';
import router from './router';
import './components';
import './moduleConfig';
// import { initI18n } from './i18n';

const app = new Vue({
    router,
    // i18n: initI18n(),
});
Vue.mixin({
    methods: {
        initLoadStatus(status) {
            status = Array.isArray(status) ? status : [status];
            const map = {};
            status.forEach((item) => {
                map[`${item}ing`] = false;
                map[`${item}Error`] = false;
                map[`${item}Done`] = false;
            });
            return map;
        },
        addLoadStatus(req, status, obj) {
            obj = obj || this;
            const ing = `${status}ing`;
            const error = `${status}Error`;
            const done = `${status}Done`;
            obj[ing] = true;
            obj[error] = false;
            obj[done] = false;
            return (_.isFunction(req) ? req() : req).then((data) => {
                obj[ing] = false;
                obj[error] = false;
                obj[done] = true;
                return data;
            }, (err) => {
                if (err !== 'expired request') { // 过期请求不修改列表状态
                    obj[ing] = false;
                    obj[error] = true;
                    obj[done] = false;
                }
                return Promise.reject(err);
            });
        },
    },
});
app.$mount('#app');
