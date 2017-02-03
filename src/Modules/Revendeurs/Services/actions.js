import * as types from './mutation-types'
import { url } from 'src/Modules/Auth/resources'

export function initRev (store) {
  return url.get('revendeurs').then(function (response) {
    store.commit(types.INIT_REVENDEURS, response.data.revendeurs)
    return response
  }, function (response) {
    return response
  })
}
