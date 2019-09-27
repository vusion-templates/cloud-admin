import Page404 from './views/404.vue';
import Page500 from './views/500.vue';
import Wrapper from '@/global/utils/wrapComponent';

export default {
    path: 'exception',
    component: Wrapper,
    children: [
        {
            path: '404',
            name: '404',
            component: Page404,
            meta: {
                title: '抱歉，你访问的页面不存在。',
            },
        },
        {
            path: '500',
            name: '500',
            component: Page500,
            meta: {
                title: '抱歉，服务出现错误。',
            },
        },
    ],
};
