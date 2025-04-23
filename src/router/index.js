import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fooldal',
      component: HomeView,
    },
    {
      path: '/kapcsolat',
      name: 'kapcsolat',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/szolgaltatasaink',
      name: 'szolgaltatasaink',
      component: () => import('../views/ServicesView.vue'),
    },
    {
      path: '/araink',
      name: 'araink',
      component: () => import('../views/PricingView.vue'),
    },
  ],
})

export default router
