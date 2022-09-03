import {
  CrownFilled,
  DatabaseOutlined,
  ExportOutlined,
  FieldTimeOutlined,
  ImportOutlined,
  MediumOutlined,
  RadiusSettingOutlined
} from '@ant-design/icons';

export default {
  route: {
    routes: [
      {
        path: '/design/table/model',
        name: '模型',
        icon: <DatabaseOutlined/>,
        routes: [
          {
            path: 'https://www.zerocode.net.cn/',
            name: 'ERD Online 官方论坛',
            icon: <MediumOutlined/>
          },
        ]
      },
      {
        path: '/design/table/version',
        name: '版本',
        icon: <FieldTimeOutlined/>,
        routes: [],
      },
      {
        name: '导入',
        icon: <ImportOutlined/>,
        path: '/design/table/import',
        component: './ListTableList',
        routes: [
          {
            path: '/design/table/import/reverse',
            name: '数据源逆向解析',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
          {
            path: '/design/table/import/pdman',
            name: '解析PdMan文件',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
          {
            path: '/design/table/import/erd',
            name: '解析ERD文件',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
        ],
      },
      {
        name: '导出',
        icon: <ExportOutlined/>,
        path: '/design/table/export',
        component: './ListTableList',
        routes: [
          {
            path: '/design/table/export/common',
            name: '普通导出',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
          {
            path: '/design/table/export/more',
            name: '高级导出',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
        ],
      },
      {
        name: '设置',
        icon: <RadiusSettingOutlined/>,
        path: '/design/table/setting',
        component: './ListTableList',
        routes: [
          {
            path: '/design/table/setting/db',
            name: '数据源设置',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
          {
            path: '/design/table/setting/default',
            name: '默认项设置',
            icon: <CrownFilled/>,
            component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: '杭州市较知名的 UI 设计语言',
      url: 'https://ant.design',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: '蚂蚁集团全新一代数据可视化解决方案',
      url: 'https://antv.vision/',
      target: '_blank',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: '专业级 UI 组件库',
      url: 'https://procomponents.ant.design/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: '插件化的企业级前端应用框架。',
      url: 'https://umijs.org/zh-CN/docs',
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: '可能是你见过最完善的微前端解决方案🧐',
      url: 'https://qiankun.umijs.org/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: '语雀',
      desc: '知识创作与分享工具',
      url: 'https://www.yuque.com/',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch 工具集',
      url: 'https://kitchen.alipay.com/',
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'dumi',
      desc: '为组件开发场景而生的文档工具',
      url: 'https://d.umijs.org/zh-CN',
    },
  ],
};
