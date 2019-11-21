import Vue from 'vue'

import './rem'
import './assets/styles/common.scss'

import Vant from 'vant'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

import '@/icons' // icon
import http from './http'

Vue.prototype.$http = http

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
