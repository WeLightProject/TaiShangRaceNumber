import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/edit-page', component: '@/pages/edit-page' },
    { path: '/template-select', component: '@/pages/template-select' }
  ],
  fastRefresh: {},
  // mfsu:{},
});
