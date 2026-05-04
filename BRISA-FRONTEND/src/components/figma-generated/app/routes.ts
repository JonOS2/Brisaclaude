import type { RouteRecordRaw } from 'vue-router';

export const figmaGeneratedRoutes: RouteRecordRaw[] = [
  {
    path: '/figma-generated',
    name: 'FigmaGeneratedRoot',
    component: () => import('../app/App.vue')
  }
];
