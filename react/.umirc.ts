import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // !如果注释静态路由，则会在。umi中自动按约束生成
//   routes: [
//     { path: '/', component: '@/pages/index' },
//     // 单页面数据以及生命周期函数
//     { path: '/singleCom', component: '@/pages/base/1singleCom' },
//     // 父子组件传值
//     { path: '/passValue', component: '@/pages/base/2passValue' },
//     { path: '/dva', component: '@/pages/dva/index' },
//     { path: '/function', component: '@/pages/function/index' },
//   ],
});
