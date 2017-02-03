<template>
  <ul class='menu_list'>
      <li class="menu_item" v-if="isLogged">
        <a href="#" @click.prevent="logOut()">
          Se déconnecter
        </a>
      </li>
      <li class="menu_item" v-if="!isLogged">
        <router-link @click.native="close" :to="{ name: 'login'}">
          Se connecter 
        </router-link>
      </li>
      <li class="menu_item" v-if="!isLogged">
        <router-link @click.native="close" :to="{ name: 'signup'}">
          S'inscrire
        </router-link>
      </li>
      <li class="menu_item">
        <router-link @click.native="close" :to="{ name: 'home'}">
          Home
        </router-link>
      </li>
      <li class="menu_item">
        <router-link @click.native="close" :to="{ name: 'produits' }">
          Produits
        </router-link>
      </li>
      <li class="menu_item">
        <router-link @click.native="close" :to="{ name: 'marques' }">
          Marques
        </router-link>
      </li>
      <li class="menu_item">
        <router-link @click.native="close" :to="{ name: 'revendeurs' }">
          Revendeurs
        </router-link>
      </li>
      <li class="menu_item">
        <router-link :to="{ name: 'articles' }">
          Articles
        </router-link>
      </li>
      <auth-Dispatch :conditions="['admin']">
        <li>
          <router-link @click.native="close" :to="{ name: 'admin' }">Admin</router-link>
        </li>
      </auth-Dispatch>
    </ul>
</template>

<script>
  import auth from 'src/authConfig.js'
  import { mapActions, mapGetters } from 'vuex'
  import authDispatch from 'src/Modules/Auth/Elements/authDispatch'

  export default {
    name: 'MenuList',
    computed: {
      ...mapGetters({
        isLogged: 'isLogged'
      })
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      close () {
        this.$emit('close')
      },
      logOut () {
        this.logout().then(() => {
          auth.logout()
        })
      }
    },
    components: {
      authDispatch
    }
  }
</script>