import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/ejercicio-1',
    name: 'Example1',
    component: () => import('@/pages/Example1.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'No encontrado',
    component: () => import('@/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
