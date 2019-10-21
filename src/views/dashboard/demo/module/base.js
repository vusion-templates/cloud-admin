export default {
    module: 'demo',
    sideNav: {
        title: 'demo',
        children: [
            {
                subnav: [
                    {
                        title: '列表',
                        children: [
                            {
                                label: '基础列表',
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
                        ],
                    },
                ],
            },
            {
                subnav: [
                    {
                        title: '表单',
                        children: [
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
                ],
            },
            {
                subnav: [
                    {
                        title: '详情页',
                        children: [
                            {
                                label: '详情页',
                                to: '/demo/detail',
                            },
                        ],
                    },
                ],
            },
            {
                subnav: [
                    {
                        title: '编辑器',
                        children: [
                            {
                                label: 'Code',
                                to: '/editor/code',
                            },
                            {
                                label: 'Markdown',
                                to: '/editor/markdown',
                            },
                            {
                                label: '富文本编辑器',
                                to: '/editor/rich-editor',
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
