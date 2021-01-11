import { defineConfig } from 'umi';
export default defineConfig({
  proxy: {
    '/api': {
      // target: 'http://localhost:9821', // 端口自己配置合适的
      target:'http://cppt.i-test.com.cn',
      // target:'http://222.201.189.97:5000',
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
});
