import { defineConfig } from 'umi';
export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://localhost:9821', // 端口自己配置合适的
      changeOrigin: true
    }
  },
  dva:{
    immer: true,
  },
  targets: {
    ie: 11,
  },
  dynamicImport: {
    loading: '@/Loading',
  },
  hash:true,
  // externals: {
  //   YpRiddler: 'YpRiddler',
  // },
  // scripts: [
  //   'https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js',
  // ]

});
