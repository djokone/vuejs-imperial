import {
  INIT_REVENDEURS
} from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  allRevendeurs: [],
  isLoaded: false
}

const mutations = {
  [INIT_REVENDEURS] (state, revendeurs) {
    state.allRevendeurs = revendeurs
    state.isLoaded = true
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
