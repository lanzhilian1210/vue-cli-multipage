import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
/* eslint-disable no-new */
Vue.use(VueRouter)
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
