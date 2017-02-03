import _ from 'lodash'
// export const product = (state) => state.products.produit
export const term = (state) => {
  return state.term
}
// {route, products, research}
export const searchProducts = (state, getters, rootState) => {
  return rootState.products.allProducts.filter((v) => {
    let rep = []
    state.terms.forEach((val) => {
      if (!_.isEmpty(val)) {
        val = val.replace(/\s+/g, '')
        let req = new RegExp(val, ['i'])
        rep.push(req.test(v.name))
        rep.push(req.test(v.ref))
      }
    })
    let newRep = rep[0]
    rep.forEach((val, key) => {
      if (key && val) {
        newRep = val
      }
    })
    return newRep
  })
}
