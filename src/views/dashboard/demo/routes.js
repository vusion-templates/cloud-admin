import Wrapper from '@/global/layouts/l-wrapper.vue';
import List from './views/list';
import Form from './views/form';
import Detail from './views/detail';
import Router from './views/router';
import Editors from './views/editors';
import Charts from './views/charts';
export default {
    path: 'demo',
    component: Wrapper,
    meta: {
        crumb: 'demo',
    },
    children: [
        {
            path: '',
            redirect: 'list',
        },
        List.routes,
        Form.routes,
        Detail.routes,
        Router.routes,
        Editors.routes,
        Charts.routes,
    ],
};
