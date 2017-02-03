import * as types from './mutation-types'

/*
Search
*/
export function updateTerm (store, term) {
  return new Promise((resolve, reject) => {
    store.commit(types.SAVE_TERMS, term)
  })
}

