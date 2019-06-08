// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/reset.css' // 定义全局使用的样式
import './assets/styles/border.css' // 解决部分移动端页面border 1像素显示问题
import './assets/styles/iconfont.css' // 定义使用的图标库
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 解决部分浏览器点击响应延迟问题
fastClick.attach(document.body)
// 轮播组件
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
