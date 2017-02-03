// export const product = (state) => state.products.produit
export const products = (state) => state.products
export const allProducts = (state) => state.allProducts
export const isProductLoaded = (state) => state.isLoaded
export const product = (state, getters, {route}) => {
  let id = parseInt(route.params.id)
  return state.allProducts.find((p) => {
    return p.id === id
  }) || {}
}
