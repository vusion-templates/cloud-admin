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
                                title: '基础表单',
                                to: '/demo/form/basic',
                            },
                            {
                                title: '设置页',
                                to: '/demo/form/setting',
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
                        title: '图表',
                        children: [
                            {
                                title: 'ECharts',
                                to: '/demo/charts/echarts',
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
                                title: '代码编辑器',
                                to: '/demo/editors/code',
                            },
                            {
                                title: 'Markdown',
                                to: '/demo/editors/markdown',
                            },
                            {
                                title: '富文本编辑器',
                                to: '/demo/editors/rich-editor',
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
