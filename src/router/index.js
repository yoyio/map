import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import('../views/Map.vue')
    },
    {
      path: '/Information',
      name: 'Information',
      component: () => import('../views/Information.vue')
    },
    {
      path: '/zzz',
      name: 'zzz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/zzz.vue')
    }
  ]
})

export default router
