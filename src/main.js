import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.config.productionTip = false
/* eslint-disable */
//解决三百毫秒的点击延迟
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
