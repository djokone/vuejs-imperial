import * as types from './mutation-types'
import { url } from 'src/Modules/Auth/resources'

export function initMarques (store) {
  return url.get('marques').then(function (response) {
    store.commit(types.INIT_MARQUES, response.data.marques)
    return response
  }, function (response) {
    return response
  })
}
