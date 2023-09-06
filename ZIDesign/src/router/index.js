import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home/Home.vue'
import сatalog from '../view/Catalog/сatalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: сatalog
    }
  ]
})

export default router
