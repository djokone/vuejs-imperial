import * as types from './mutation-types'
import { api } from '../resources'
// import formErrors from '../../FormErrors/formErrors'
// import auth from 'src/auth'

/*
Users
*/
export function login (store, data) {
  return api.post('users/token.json', data).then((response) => {
    if (response.data.success) {
      store.commit(types.SAVE_AUTH, response.data.data.token)
      console.log(store.state)
      store.dispatch(
        'setFlash',
        {
          message: 'Bonjour, vous êtes maintenant connecté'
          // message: 'Bonjour ' + store.state.user.profil.prenom + ' ' + store.state.user.profil.nom + ', vous êtes maintenant connecté !'
        }
      )
      console.log(response)
      return response
    } else {
      store.dispatch(
        'setFlash',
        {
          message: 'Une erreur c\'est produite lors de votre connexion',
          type: 'error'
        }
      )
      return false
    }
  }, (error) => {
    store.dispatch(
      'setFlash',
      {
        message: error.response.data.data.message,
        type: 'error'
      }
    )
    return error.response
  }).catch(function (error) {
    return error.response
  })
}

export function signup (store, data) {
  return api.post('users/register').save(data).then((response) => {
    if (response.data.success) {
      // store.commit(types.)
      return response
    } else {
    }
  }, (response) => {
    return response
  })
}

export function getUser (store, id) {
  return api.get('users/' + id).then((response) => {
    if (response.data.success === true) {
      saveUser(store, response.data.data)
      return response.data.data
    } else {
      return response.data.data
    }
  }).catch((error) => {
    return error.response
  })
}
export function saveProfil (store, {data, id}) {
  store.commit(types.RESET_ERRORS)
  return api.put('users/' + id, data).then((response) => {
    if (response.data.success === true) {
      saveUser(store, data)
      return response.data
    }
  }).catch((error) => {
    console.log(error.response)
    console.log(error.response.data.data.errors)
    store.commit(types.SAVE_ERRORS, error.response.data.data.errors)
    return error.response.data
  })
}

export function saveUser (store, data) {
  return new Promise((resolve, reject) => {
    store.commit(types.SAVE_USER, data)
  })
}

export function saveAuth (store, token) {
  return new Promise((resolve, reject) => {
    store.commit(types.SAVE_AUTH, token)
    return resolve
  })
}

export function addImg (store, data) {
  return new Promise((resolve, reject) => {
    store.commit(types.ADD_IMG, data)
    store.dispatch('setFlash', {message: 'Votre image a bien été ajoutée'})
  })
}

export function delImg (store, id) {
  return api.delete('medias/' + id).then((response) => {
    if (response.data.success === true) {
      // saveUser(store, data)
      store.commit(types.DEL_IMG, id)
      store.dispatch('setFlash', {message: 'Votre image a bien été suprimée'})
      return response.data.data
    }
  })
}

export function logout (store) {
  return new Promise((resolve, reject) => {
    store.commit(types.LOGOUT)
    store.dispatch('setFlash', {message: 'Vous êtes maintenant déconnecté'})
    return resolve()
  })
}

export function changeThumb (store, {mediaId, userId}) {
  let data = {media_id: mediaId}
  return api.put('users/' + userId, data).then((response) => {
    if (response.data.success === true) {
      store.commit(types.CHANGE_THUMB, mediaId)
      store.dispatch('setFlash', {message: 'Votre photo de profil a bien été modifié !'})
      return response.data.data
    }
  })
}
