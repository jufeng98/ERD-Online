// https://umijs.org/config/
import {defineConfig} from 'umi';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const {REACT_APP_ENV} = process.env;
const isEnvProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  hash: true,
  antd: {
    dark: true, // 开启暗色主题
  },
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 240,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
    'border-radius-base': '6px',
    'modal-content-bg': '#1f2931',

  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {type: 'none'},
  webpack5: {},
  exportStatic: {},
  sass: {},
  // 生产环境去除console日志打印
  terserOptions: {
    compress: {
      drop_console: isEnvProduction,
    },
  },
});
