import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      // 入口位置
      component: '@/layouts/index',
      routes: [
          // 子路由
        { path: '/', component: '@/pages/home/index', title: '首页'},
        { path: '/order', component: '@/pages/order/index', title: '订单' },
        { path: '/user', component: '@/pages/user/index', title: '用户' },
      ],
    },

  ],
});
