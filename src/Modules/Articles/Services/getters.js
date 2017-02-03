export const posts = (state) => state.allPosts
export const post = (state, getters, {route}) => {
  let id = parseInt(route.params.id)
  return state.allPosts.find((p) => {
    return p.id === id
  }) || {}
}

export const isPostLoaded = (state) => state.isLoaded
