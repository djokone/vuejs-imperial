<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import 'intersection-observer'
import topNav from 'src/Modules/Header/Templates/topNav'
import { mapActions } from 'vuex'
import auth from './authConfig'

export default {
  name: 'App',
  mounted () {
    this.initRev()
    this.categorieInit()
    this.revendeursInit()
    this.marquesInit()
    this.productsInit()
    this.postsInit()
    if (auth.isLogged()) {
      let token = auth.getToken()
      this.saveAuth(token)
      let data = auth.getData()
      this.getUser(data.sub).then((response) => {
        auth.saveUser(response)
      })
    }
  },
  methods: {
    ...mapActions({
      initCategories: 'initCategories',
      getProducts: 'getProducts',
      initMarques: 'initMarques',
      initRev: 'initRev',
      initPosts: 'initPosts',
      saveAuth: 'saveAuth',
      getUser: 'getUser'
    }),
    categorieInit () {
      let that = this
      this.initCategories().then(function (response) {
        // console.log(response)
        if (response.status !== 200) {
          that.categorieInit()
        }
      })
    },
    productsInit () {
      this.getProducts().then(function (response) {
        if (response.status !== 200) {
          this.productsInit()
        }
      })
    },
    marquesInit () {
      this.initMarques().then(function (response) {
        if (response.status !== 200) {
          this.marquesInit()
        }
      })
    },
    revendeursInit () {
      this.initRev().then(function (response) {
        if (response.status !== 200) {
          this.revendeursInit()
        }
      })
    },
    postsInit () {
      this.initPosts().then((response) => {
        if (response.status !== 200) {
          this.postsInit()
        }
      })
    }
  },
  components: {
    topNav
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  // reset 

  *{
    margin:0px;
  }
  *:focus {
    outline: none;
  }
  html{
    width:100%;
    position:relative;
  }
  body{
    overflow-x:hidden;
    width:100%;
    position:relative;
  }
  #body{
    @include clearfix;
    @include fill-parent;
    padding: 0px 5em ;
    @include media(max-width 950px , 12) {
      padding: 0px 1em;
      // @include span-columns(10)
    }
    svg{
      margin:0px;
    }
  }
  
  .red{
      color: #e3001b;
  }
  .bold{
    font-weight: bold;
  }
  p{
    font-family: 'Montserrat';
  }
  h1{
    font-family: 'Montserrat';
  }
  h2{
    font-family: 'Montserrat';
  }
  h3{
    font-family: 'Montserrat';
  }
  h4{
    font-family: 'Montserrat';
  }
  button{
    cursor: pointer;
  }
  ::-moz-selection { color: white; background: #e3001b;}
  ::selection { color: white; background: #e3001b;}
  .btn{
      display:block;
      
      font-family: 'Montserrat', sans-serif;
      text-decoration: none;
      color: #181818;
      padding: 6px;
      font-size: 14pt;
      width: 100%;
      background: #f9f9f9;
      border: 1px #dedede solid;
      
    }
    .btn:hover{
      background: white;
      color: #e3001b;
    }
    $visual-grid-color: #e3001b !global;
    $visual-grid-index: front !global;
    $visual-grid-opacity: 1 !default;
</style>
