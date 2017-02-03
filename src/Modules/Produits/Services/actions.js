import * as types from './mutation-types'
import { url, api } from 'src/Modules/Auth/resources'
/*
Produits
*/
export function getProducts (store) {
  let routes = store.rootState.route
  return url.get('produits').then(function (response) {
    store.commit(types.INIT_PRODUCTS, {
      products: response.data.products, routes: routes})
    return response
  }, function (response) {
    return response
  })
}

export function getProduct (store) {
  let id = store.state.route.params.id
  // this.$http.headers.common['content-type'] = 'application/json'
  return api.get('produit/' + id).then(function (response) {
    store.commit(types.GET_PRODUCT, response.data.produit)
    return response
  }, function (response) {
    return response
  })
}
