import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Recommend',
    component: () => import('@/views/recommend/index.vue'),
  },
  {
    path: '/jingxuan',
    name: 'JingXuan',
    component: () => import('@/views/choiceness/index.vue'),
  },
  {
    path: '/aisearch',
    name: 'AiSearch',
    component: () => import('@/views/aiSearch/index.vue'),
  },
  {
    path: '/follow',
    name: 'Follow',
    component: () => import('@/views/follow/index.vue'),
  },
  {
    path: '/friend',
    name: 'Friend',
    component: () => import('@/views/friend/index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
  },
  {
    path: '/live ',
    name: 'LiveStreaming',
    component: () => import('@/views/liveStreaming/index.vue'),
  },
  {
    path: '/vs',
    name: 'VideoHall',
    component: () => import('@/views/videoHall/index.vue'),
  },
  {
    path: '/series',
    name: 'Series',
    component: () => import('@/views/series/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})


export default router
