import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import auth from 'src/Modules/Auth/Services/auth'
import categories from 'src/Modules/Categories/Services/categories'
import modal from 'src/Modules/Modal/Services/modal'
import products from 'src/Modules/Produits/Services/products'
import revendeurs from 'src/Modules/Revendeurs/Services/revendeurs'
import notifications from 'src/Modules/Notifs/Services/notifications'
import marques from 'src/Modules/Marques/Services/marques'
import sidbar from 'src/Modules/Sidbar/Services/sidbar'
import posts from 'src/Modules/Articles/Services/posts'
import research from 'src/Modules/Research/Services/research'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
}

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    auth,
    categories,
    modal,
    products,
    notifications,
    revendeurs,
    marques,
    sidbar,
    posts,
    research
  },
  strict: debug
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './mutations',
    'src/Modules/Auth/Services/auth',
    'src/Modules/Categories/Services/categories',
    'src/Modules/Modal/Services/modal',
    'src/Modules/Produits/Services/products',
    'src/Modules/Revendeurs/Services/revendeurs',
    'src/Modules/Notifs/Services/notifications',
    'src/Modules/Marques/Services/marques',
    'src/Modules/Sidbar/Services/sidbar',
    'src/Modules/Articles/Services/posts',
    'src/Modules/Research/Services/research'
  ], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newMutations = require('./mutations').default
    const newModuleAuth = require('src/Modules/Auth/Services/auth').default
    const newModuleCategories = require('src/Modules/Categories/Services/categories').default
    const newModuleModal = require('src/Modules/Modal/Services/modal').default
    const newModuleProducts = require('src/Modules/Produits/Services/products').default
    const newModuleRev = require('src/Modules/Revendeurs/Services/revendeurs').default
    const newModuleNotifications = require('src/Modules/Notifs/Services/notifications').default
    const newModuleMarques = require('src/Modules/Marques/Services/marques').default
    const newModuleSidbar = require('src/Modules/Sidbar/Services/sidbar').default
    const newModulePosts = require('src/Modules/Articles/Services/posts').default
    const newModuleResearch = require('src/Modules/Research/Services/research').default
    // swap in the new actions and mutations

    store.hotUpdate({
      mutations: newMutations,
      modules: {
        auth: newModuleAuth,
        categories: newModuleCategories,
        modal: newModuleModal,
        products: newModuleProducts,
        notifications: newModuleNotifications,
        revendeurs: newModuleRev,
        marques: newModuleMarques,
        sidbar: newModuleSidbar,
        posts: newModulePosts,
        research: newModuleResearch
      }
    })
  })
}

export default store
