import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/menu',
    name: 'CoffeeMenu',
    component: () => import('../views/CoffeeMenu.vue')
  },
  {
    path: '/status',
    name: 'OrderStatus',
    component: () => import('../views/OrderStatus.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
