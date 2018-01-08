// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/'
import App from './App'
import store from './vuex/store'
import { ConfirmPlugin } from 'vux'
Vue.use(require('vue-wechat-title'))
Vue.use(ConfirmPlugin)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
