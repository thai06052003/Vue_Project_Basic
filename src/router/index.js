import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import TodoDetailView from '@/views/TodoDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/update/:id',
      name: 'update',
      component: CreateView,
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: TodoDetailView,
    },
  ],
})

export default router
