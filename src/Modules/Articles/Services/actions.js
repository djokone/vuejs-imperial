import * as types from './mutation-types'
import { url } from 'src/Modules/Auth/resources'

export function initPosts (store) {
  return url.get('posts').then(function (response) {
    store.commit(types.INIT_POSTS, response.data.posts)
    return response
  }, function (response) {
    return response
  })
}
