export const marques = (state) => state.allMarques
export const marque = (state, getters, {route}) => {
  let id = parseInt(route.params.id)
  return state.allMarques.find((p) => {
    return p.id === id
  }) || {}
}

export const isMarqueLoaded = (state) => state.isLoaded

export const marqueProducts = (state, getters, {products, route}) => {
  let id = parseInt(route.params.id)
  return products.allProducts.filter((p) => {
    return p.marque_id === id
  }) || {}
}
