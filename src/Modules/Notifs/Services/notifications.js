import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  notifications: []
}

const mutations = {
  [types.SAVE_NOTIF] (state, notif) {
    state.notifications.push(notif)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
