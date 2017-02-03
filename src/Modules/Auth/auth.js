/* global localStorage */
/* eslint no-undef: "error" */

import jwtDecode from 'jwt-decode'
import _ from 'lodash'
// import { api } from './resources'
// import config from 'src/bootstrap'

export default class Auth {

  constructor (params, debug) {
    if (debug) { debug = false }
    this.errors
    this.debug = debug
    this.params = params
    if (this.debug) {
      console.log('l\'objet auth est construit')
    }
    if (this.isLogged()) {
      this.token = localStorage.getItem('token')
      this.sub = localStorage.getItem('sub')
    }
  }

  start () {
    if (this.debug) {
      console.log('l\'objet est initialisé ...')
    }
  }

  login (token) {
    this.save({token: token})
    if (!this.isLogged()) {
      this.save({token: token})
      let tokenDecode = jwtDecode(token)
      this.save(tokenDecode)
    }
  }

  isLogged () {
    if (localStorage.getItem('sub')) {
      if (this.isExpirate()) {
        this.logout()
        return false
      } else {
        return true
      }
    }
    return false
  }

  isExpirate () {
    return localStorage.getItem('exp') < Date.now() / 1000
  }

  getData () {
    if (!_.isEmpty(localStorage.getItem('token'))) {
      return jwtDecode(localStorage.getItem('token'))
    } else {
      return false
    }
  }

  getToken () {
    this.token = localStorage.getItem('token')
    if (!_.isEmpty(localStorage.getItem('token'))) {
      return localStorage.getItem('token')
    }
  }

  save (data, value) {
    if (typeof data === 'object') {
      this.data = data
      _.find(data, (v, k) => {
        localStorage.setItem(k, v)
      })
    } else if (typeof data === 'string' && value) {
      localStorage.setItem(data, value)
    }
  }

  saveUser (data) {
    this.user = data
  }

  logout () {
    localStorage.clear()
  }

  // _sendRequest (data) {
  //   console.log(config.serveur + '/users/token.json')
  //   return api.post('/users/token.json', data).then((response) => {
  //     if (response.data.success) {
  //       this.token = response.data.data.token
  //       return response.data.data.token
  //     } else {
  //       return false
  //     }
  //   }, (response) => {
  //     console.log(response)
  //   }).catch(function (error) {
  //     console.log(error)
  //   })
  // }
}
