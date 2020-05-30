import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import NavMenu from '../components/NavMenu.vue'
import Cartoon from '../components/Cartoon.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/', redirect: '/login' },
  { path: '/nav', component: NavMenu },
  { path: '/cartoon', component: Cartoon }
]

const router = new VueRouter({
  routes
})

export default router
