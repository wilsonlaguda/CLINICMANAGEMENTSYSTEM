import { createRouter, createWebHistory } from 'vue-router'
import auth from '../pages/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: auth
    },
    {
      path: '/dashboard',
      name: 'home',
      component: () => import('../pages/admin/index.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../pages/admin/dashboard.vue'),
        },
        {
          path: '/managestudent',
          name: 'managestudent',
          component: () => import('../pages/admin/managestudent.vue'),
        },
        {
          path: '/add',
          name: 'add',
          component: () => import('../pages/admin/add.vue'),
        },
        {
          path: '/appointment',
          name: 'appointment',
          component: () => import('../pages/admin/appointment.vue'),
        },
      ]
    },
  ]
})

export default router
