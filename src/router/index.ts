import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PromoView from '../views/PromoView.vue'
import AboutView from '../views/AboutView.vue'
import MenuView from '../views/MenuView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/promo',
    name: 'promo',
    component: PromoView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

//router.beforeEach((to, from, next) => {
//
//});

export default router
