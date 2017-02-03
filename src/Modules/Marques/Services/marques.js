import {
  INIT_MARQUES
} from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  allMarques: [],
  isLoaded: false
}

const mutations = {
  [INIT_MARQUES] (state, marques) {
    state.allMarques = marques
    state.isLoaded = true
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
