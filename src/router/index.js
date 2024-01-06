import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/public',
      name: 'public',
      component: () => import('../views/PublicView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: '/user-management',
          name: 'userManagement',
          component: () => import('../views/admin/module/UserManagementView.vue')
        },
      ]
    },
  ]
})

export default router
