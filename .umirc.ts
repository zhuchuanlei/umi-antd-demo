import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/demo1', name: 'demo1', component: '@/pages/demo1' },
        { path: '/demo2', name: 'demo2', component: '@/pages/demo2' },
      ]
    },
  ],
  fastRefresh: {},
});
