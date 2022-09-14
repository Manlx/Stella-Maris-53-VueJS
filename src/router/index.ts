import PhotosPageVue from '@/Pages/PhotosPage.vue'
import HomePageVue from '@/Pages/HomePage.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component:HomePageVue
  },
  {
    path: '/Photos',
    name: 'Photos',
    component:PhotosPageVue
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
