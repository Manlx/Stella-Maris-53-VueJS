import PhotosPageVue from '@/Pages/PhotosPage.vue'
import HomePageVue from '@/Pages/HomePage.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AvailabilityPageVue from '@/Pages/AvailabilityPage.vue'
import BookingPageVue from '@/Pages/BookingPage.vue'
import ContactPageVue from '@/Pages/ContactPage.vue'
import SpecialsPageVue from '@/Pages/SpecialsPage.vue'
import TariffsPageVue from '@/Pages/TariffsPage.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/AvailabilityPage',
    name: 'AvailabilityPage',
    component:AvailabilityPageVue
  },
  {
    path: '/BookingPage',
    name: 'BookingPage',
    component:BookingPageVue
  },
  {
    path: '/ContactPage',
    name: 'ContactPage',
    component:ContactPageVue
  },
  {
    path: '/',
    name: 'Home',
    component:HomePageVue
  },
  {
    path: '/PhotosPage',
    name: 'PhotosPage',
    component:PhotosPageVue
  },
  {
    path: '/SpecialsPage',
    name: 'SpecialsPage',
    component:SpecialsPageVue
  },
  {
    path: '/TariffsPage',
    name: 'TariffsPage',
    component:TariffsPageVue
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
