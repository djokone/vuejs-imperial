
<template>
  <div class="menu">
  <div class="blank"></div>
    <!-- 7 -->
    <ul class='big_menu'>
      <li class="menu_item">
        <router-link :to="{ name: 'home'}">
          Home
        </router-link>
      </li>
      <li class="menu_item">
        <router-link :to="{ name: 'produits' }">
          Produits
        </router-link>
      </li>
      <li class="menu_item">
        <router-link :to="{ name: 'marques' }">
          Marques
        </router-link>
      </li>
      <li class="menu_item">
        <router-link :to="{ name: 'revendeurs' }">
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
          <router-link :to="{ name: 'admin' }">Admin</router-link>
        </li>
      </auth-Dispatch>
    </ul>
  </div>
</template>

<script>
  /* global IntersectionObserver */
  import authDispatch from 'src/Modules/Auth/Elements/authDispatch'
  import smallBar from 'src/Modules/Header/Templates/smallBar'

  export default ({
    data () {
      return {
        observer: {}
      }
    },
    mounted () {
      let options = {
        root: this.$el.querySelector('.menu'),
        rootMargin: '0px',
        threshold: 1.0
      }
      this.observer = new IntersectionObserver(this.callback, options)
    },
    methods: {
      callback (entries) {
        console.log(entries)
      }
    },
    components: {
      authDispatch,
      smallBar
    }
  })
</script>