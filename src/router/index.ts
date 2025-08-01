import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/jingxuan.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})


export default router
