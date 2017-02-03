<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #login{
    font-family: 'Monserrat';
    @include span-columns(6 of 12)
    @include shift(3);
    h2{
      font-size: 1.8em;
      text-align: center;
      margin-bottom: 20px;
    }
    .error{
      font-family: arial;
      text-align: center;
      color: #e3001b;
    }
    .input{
      width: 100%;
      margin: 20px 0px;

      input{
        font-size: 1.3em;
        width: 100%;
        padding: 10px;
        border: 1px #8f8f8f solid;
      }
      input:focus{
        border-bottom: 4px #e3001b solid;

      }
    }
    button{
      display:block;
      padding: 20px;
      text-transform: uppercase;
      width: 100%;
      color: white;
      font-size: 1.3em;
      text-align:center;
      background: #e3001b;
      box-shadow: none;
      border: none;
    }
    button:focus{
      cursor: pointer;
    }
    
  }
</style>

<template>
  <div id="login">
    <h2>Se connecter</h2>
    <p class="error">{{loginForm.error}}</p>
    <form action="">
      <div class="input">
        <input type="text" placeholder="Nom d'utilisateur" v-model="loginForm.username" id="username">
      </div>
      <div class="input">
        <input type="password" placeholder="Mot de passe"v-model="loginForm.password" id="mdp">
      </div>
      <!-- <h2>Se connecter</h2> -->
      <button @click.prevent="save()">Se connecter</button>
    </form>
  </div>
</template>

<script>
import auth from 'src/authConfig'
import config from 'src/bootstrap'
import { mapActions, mapGetters } from 'vuex'

export default ({
  http: {
    root: config.serveur + '/api',
    headers: {
      Accept: 'application/json'
    }
  },
  name: 'Login',
  data () {
    return {
      loginForm: {
        error: '',
        username: '',
        password: ''
      }
    }
  },
  props: {
  },
  mounted () {
    // if (auth.isLogged()) {
    //   // this.toogleModal('close', false)
    // }
  },
  computed: {
    ...mapGetters({
      isLogged: 'isLogged'
    })
  },
  methods: {
    ...mapActions({
      login: 'login',
      toogleModal: 'toogleModal',
      getUser: 'getUser'
    }),
    save () {
      let toSend = {username: this.loginForm.username, password: this.loginForm.password}
      this.login(toSend).then((response) => {
        console.log(response)
        if (response.data.success) {
          auth.login(response.data.data.token)
          this.getUser(auth.getData().sub)
          this.$router.push('/')
          // this.toogleModal('close')
        } else {
          this.loginForm.error = response.data.data.message
        }
      })
    }
  }
})

</script>