import * as types from './mutation-types'
import * as productTypes from '../../Produits/Services/mutation-types'
import { url } from 'src/Modules/Auth/resources'
/*
Categories
*/
export function initCategories (store) {
  return url.get('categories').then(function (response) {
    store.dispatch('categoriesInitMutation', response.data.sidebar).then(() => {
      store.dispatch('selectCategorie')
    })
    return response
  }, function (response) {
    return response
  })
}

export function selectCategorie (store) {
  return new Promise((resolve, reject) => {
    store.dispatch('selectCategorieMutation').then(() => {
      store.dispatch('filterCategorieProductMutation')
      resolve()
    })
  })
}

/*  //////////////////////////////////////
* Action Mutation
/////////////////////////////////////  */

export function changeCategorieStateMutation (store) {
  return new Promise((resolve, reject) => {
    store.commit(types.CHANGE_STATE)
    resolve()
  })
}

export function filterCategorieProductMutation (store) {
  return new Promise(function (resolve, reject) {
    store.commit(productTypes.FILTER_PRODUCT, store.state)
    resolve()
  })
}

export function categoriesInitMutation (store, data) {
  return new Promise(function (resolve, reject) {
    store.commit(types.INIT_CATEGORIES, data)
    resolve()
  })
}

export function selectCategorieMutation (store) {
  return new Promise(function (resolve, reject) {
    let id
    if (store.rootState.route.params && typeof store.rootState.route.params.id !== 'undefined') {
      id = store.rootState.route.params.id
    } else {
      id = 1
    }
    store.commit(types.SELECT_CATEGORIE, id)
    resolve()
  })
}

