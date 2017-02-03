import {
  INIT_CATEGORIES,
  SELECT_CATEGORIE,
  CHANGE_STATE
} from './mutation-types'
import _ from 'lodash'
import tree from 'src/Services/function.js'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  AllCategories: [],
  path: [],
  isLoaded: false,
  selectedCategorie: {}
}

const mutations = {
  [INIT_CATEGORIES] (state, categories) {
    state.AllCategories = categories
    state.isLoaded = true
  },
  [CHANGE_STATE] (state) {
    let cats = state.AllCategories
    let chemin = ''
    state.path.forEach((value, key) => {
      if (key) {
        chemin += '.children'
      }
      var index = value.index
      if (typeof value.open === 'undefined') {
        var open = true
      } else {
        open = !value.open
      }
      chemin += '[' + index + ']'
      var to = chemin + '.open'
      _.set(cats, to, open)
    })
  },
  [SELECT_CATEGORIE] (state, id) {
    if (!_.isEmpty(state.AllCategories)) {
      let item = tree.getSubMenuItem(state.AllCategories, id)
      if (!_.isEmpty(item)) {
        let path = tree.getParent(item, state.AllCategories)
        state.path = path.reverse()
        state.selectedCategorie = item
      }
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
