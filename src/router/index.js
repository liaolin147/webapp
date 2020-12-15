import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import NavMenu from '../components/NavMenu.vue'
import Cartoon from '../components/Cartoon.vue'
import Chapter from '../components/Chapter.vue'
import Video from '../components/Video.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/', redirect: '/login' },
  { path: '/nav', component: NavMenu },
  { path: '/cartoon', component: Cartoon },
  { path: '/chapter', component: Chapter },
  { path: '/video', component: Video },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router
