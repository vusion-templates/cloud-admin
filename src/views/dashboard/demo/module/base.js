export default {
    module: 'demo',
    sideNav: {
        title: 'demo',
        children: [
            {
                label: '列表',
                to: '/demo/list',
            },
            {
                label: '本地列表',
                to: '/demo/localList',
            },
            {
                label: 'tab 列表',
                to: '/demo/tabs',
            },
            {
                label: '详情页',
                to: '/demo/detail',
            },
            {
                label: '表单',
                to: '/form/normal',
            },
            {
                label: '设置页',
                to: '/form/setting',
            },
        ],
    },
};
