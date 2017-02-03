import { router } from '../main'
import Velocity from 'velocity-animate'
import auth from './auth.js'

router.beforeEach((to, from, next) => {
  let authorize = false
  if (typeof to.auth === 'object') {
    if (auth.isLogged()) {
      let user = auth.getData()
      to.auth.forEach((v) => {
        if (v === user.role) {
          authorize = true
        }
      })
    }
    if (to.auth[0] === 'all') {
      authorize = true
    }
    if (!authorize) {
      next({name: 'login'})
    } else {
      next()
    }
  } else {
    next()
  }
})
router.afterEach(function (transition) {
  Velocity(document.querySelectorAll('body'), 'scroll', { offset: 0 })
})
