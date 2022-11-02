import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/loginPage',
    name: 'loginPage',
    component:()=>import('../views/LoginPage.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    alias:'/',
    component:()=>import('../views/HomePage.vue')
  },
   {
    path: '/detailsPage/:id',
    name: 'detailsPage',
   
    component:()=>import('../views/DetailsPage.vue')
  },
  {
    path: '/contactPage',
    name: 'contactPage',
    component:()=>import('../views/ContactPage.vue')
  },
  {
    path: '/aboutPage',
    name: 'aboutPage',
    component:()=>import('../views/AboutPage.vue')
   }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
