import login from 'src/Modules/Auth/Templates/login'
// import test from '../components/modal/test'
import modal from '../Transitions/modalTransition'
import construction from 'src/Modules/Pages/Templates/construction'

export default {
  '/popup': {
    component: modal,
    children: {
      '/login': {
        component: login,
        auth: ['all']
      },
      '/construction': {
        name: 'construction',
        component: construction
      }
    }
  }
}
