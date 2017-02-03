import * as types from './mutation-types'

/*
Modal
*/
export function toogleModal (store, etat, redirect) {
  if (typeof redirect === 'undefined') {
    redirect = true
  }
  return new Promise(function (resolve, reject) {
    if (etat === 'open') {
      if (!store.state.modal.modal) {
        store.dispatch(types.CHANGE_MODAL, true)
      }
    } else if (etat === 'close') {
      if (redirect) {
        close(store)
      }
      if (store.state.modal.modal) {
        store.dispatch(types.CHANGE_MODAL, false)
      }
    } else {
      if (store.state.modal.modal) {
        if (redirect) {
          close(store)
        }
      }
      store.dispatch(types.CHANGE_MODAL, !store.state.modal.modal)
    }
  })
}

export function close (store) {
  return new Promise(function (resolve, reject) {
    let url = store.state.route.path
    let referer = /^([a-z0-9\-/]*)(\/popup\/[a-z0-9/]*$)/.exec(url)
    if (referer[1] === '') {
      // this.$router.push('/')
    } else {
      // store.router.go(referer[1])
    }
  })
}
