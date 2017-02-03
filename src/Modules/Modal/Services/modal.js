import {
  CHANGE_MODAL
} from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  modal: false
}

const mutations = {
  [CHANGE_MODAL] (state, etat) {
    state.modal = etat
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
