import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import Video from 'video.js'

// 导入全局样式表
import './assets/css/global.css'

// 导入videojs样式表
import 'video.js/dist/video-js.css'

// 导入组件
import NavMenu from './components/NavMenu'

// 组件注册
Vue.component('nav-menu', NavMenu)

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.prototype.$video = Video

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
