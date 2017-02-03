import tree from 'src/Services/function'
import { isEmpty } from 'lodash'
export const selectedCategorie = (state) => state.selectedCategorie
export const categoriePath = (state) => state.path

export function categorie (state, getters, {route}) {
  let id = parseInt(route.params.id)
  return tree.getSubMenuItem(state.AllCategories, id)
  // return categories.AllCategories.find((p) => {
  //   return p.id === id
  // }) || {}
}

export const isCategorieLoaded = (state) => state.isLoaded

export const categories = (state) => state.AllCategories

// export const categoriePath = (state) => state.currentPath
// Récupère le chemin en fonction de la categorie selection
 // { route, categories, products }
export function currentPath (state, getters, { route, products }) {
  let id = false
  let pathArray = tree.parseUrl(route.path)
  if (pathArray[1] === 'produit') {
    if (!isEmpty(route.params.id)) {
      products.allProducts.forEach((v) => {
        if (v.id === parseInt(route.params.id)) {
          id = v.category_id
        }
      })
    }
  }
  if (!isEmpty(route.params.id)) {
    if (!id) {
      id = parseInt(route.params.id)
    }
    let item = tree.getSubMenuItem(state.AllCategories, id)
    if (!isEmpty(item)) {
      let path = tree.getParent(item, state.AllCategories)
      path = path.reverse()
      return path
    }
  } else {
    return []
  }
  return []
}

