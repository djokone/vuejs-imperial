import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import routes from './Router/router'
import auth from './authConfig'
import store from './Services/store'
import './polyfill/polyfill-filter'

// import VueHead from 'vue-head'
// Vue.use(VueHead)
Vue.use(VueRouter)

auth.start(Vue)

export const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  strict: true
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  store,
  render: h => h(require('./App'))
})
