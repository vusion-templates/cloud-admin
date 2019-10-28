export default {
    sidebar: {
        title: 'demo',
        children: [
            {
                subnav: [
                    {
                        title: '列表',
                        children: [
                            {
                                title: '基础列表',
                                to: '/demo/list',
                            },
                            {
                                title: '本地列表',
                                to: '/demo/localList',
                            },
                            {
                                title: 'tab 列表',
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
                                title: '表单',
                                to: '/form/normal',
                            },
                            {
                                title: '设置页',
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
                                title: '详情页',
                                to: '/demo/detail',
                            },
                        ],
                    },
                ],
            },
            {
                subnav: [
                    {
                        title: 'chart',
                        children: [
                            {
                                title: 'echarts',
                                to: '/chart/echarts',
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
                                title: 'Code',
                                to: '/editor/code',
                            },
                            {
                                title: 'Markdown',
                                to: '/editor/markdown',
                            },
                            {
                                title: '富文本编辑器',
                                to: '/editor/rich-editor',
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
