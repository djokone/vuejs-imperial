import Auth from './modules/Auth/auth.js'
import config from 'src/bootstrap'

export default new Auth({
  root: config.serveur
})
