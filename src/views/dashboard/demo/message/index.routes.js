import Wrapper from '@/global/utils/wrapComponent';
import Message from './views/message.vue';
import MessageDetail from './views/message.detail.vue';
export default {
    path: 'message',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        title: '系统通知',
        crumb: {
            label: '系统通知',
        },
    },
    children: [
        {
            path: '',
            name: 'message.list',
            component: Message,
        },
        {
            path: 'detail',
            name: 'message.detail',
            component: MessageDetail,
            meta: {
                crumb: {
                    label: '通知详情',
                },
            },
        },
    ],
};
