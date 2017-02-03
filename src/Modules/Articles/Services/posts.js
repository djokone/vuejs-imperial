import * as types from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  allPosts: [],
  isLoaded: false
}

const mutations = {
  [types.INIT_POSTS] (state, posts) {
    state.allPosts = posts
    state.isLoaded = true
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
