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
        { path: '/register', component: '@/pages/register/index', title: '注册'},
        { path: '/login', component: '@/pages/login/index', title: '登录'},
        { path: '/order', component: '@/pages/order/index', auth: true, title: '订单' },
        { path: '/user', component: '@/pages/user/index', auth: true, title: '用户' },
        { path: '/user/edit', component: '@/pages/user/edit/index', title: '编辑' },
        { path: '/search', component: '@/pages/search', title: '搜索' },
        { path: '/house', component: '@/pages/house/index', title: '详情' },
        { path: '/test', component: '@/pages/test', title: '搜索' },
      ],
    },

  ],
});
