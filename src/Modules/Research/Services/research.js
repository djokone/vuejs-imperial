import {
  SAVE_TERMS
} from './mutation-types.js'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  term: '',
  terms: []
}

const mutations = {
  [SAVE_TERMS] (state, term) {
    state.term = term
    state.terms = term.replace('/( )[2,]/g', ' ').trim().split(' ')
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

