import _ from 'lodash'
import {
  INIT_PRODUCTS,
  GET_PRODUCT,
  FILTER_PRODUCT
} from './mutation-types.js'

import * as actions from './actions'
import * as getters from './getters'

const state = {
  allProducts: [],
  produit: [],
  products: [],
  isLoaded: false
}

const mutations = {
  [INIT_PRODUCTS] (state, {products, routes}) {
    state.allProducts = products
    if (typeof routes.path !== 'undefined') {
      let type = routes.path.split('/')
      if (type[1] === 'categorie') {
        products = _.filter(products, {'category_id': parseInt(routes.params.id)})
      }
    }
    state.products = products
    state.isLoaded = true
  },
  [GET_PRODUCT] (state, product) {
    state.produit = product
  },
  [FILTER_PRODUCT] (state, categorie) {
    if (!_.isEmpty(categorie.selectedCategorie)) {
      state.products = _.filter(state.allProducts, {'category_id': parseInt(categorie.selectedCategorie.id)})
    }
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}

