<style src="../Scss/header.scss" lang="scss">
</style>

<template>
  <div id="firstbar">
    <div class="space"></div>
    <div class="auth">
      <p>
        <div v-if="isLogged">
          <a href="#" @click.prevent="logOut()" class="connexion" v-if="isLogged">
            Se déconnecter
          </a>
        </div>
        <div v-if="!isLogged">
          <router-link :to="{name:'login'}"href="#" class='connexion' v-if="!isLogged"> <img src="../../../assets/user.png" alt=""> Se connecter </router-link>
          
           | 
           <router-link :to="{name: 'signup'}" class="signup"> S'inscrire </router-link>
        </div>
      </p>
    </div>
    <search :entity="0"></search>
  </div>
</template>

<script>
  import auth from 'src/authConfig.js'
  import authDispatch from 'src/Modules/Auth/Elements/authDispatch'
  import { mapGetters, mapActions } from 'vuex'
  import search from 'src/Modules/Research/Templates/search'
  // import {
  //   logout
  // } from 'src/Modules/Auth/Services/actions'
  // import {isLogged} from 'src/Modules/Auth/Services/getters'

  export default ({
    name: 'firstbar',
    data () {
      return {
        test: true
      }
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged'
      })
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      toogle () {
        this.test = !this.test
      },
      logOut () {
        this.logout().then(() => {
          auth.logout()
        })
      }
    },
    components: {
      'auth-dispatch': authDispatch,
      search
    }
  })
</script>