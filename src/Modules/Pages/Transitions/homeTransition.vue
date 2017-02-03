<style scoped>
 /* #{
    background: blue;
  }*/
  #body.blur>div:not(#modal){
    filter: blur(4px) ;
    -webkit-filter: blur(4px) ;
    -moz-filter: blur(4px) ;
    -o-filter: blur(4px) ;
    -ms-filter: blur(4px) ;
    transition-property: filter;
    transition-duration: 0.5s;
  }
  #body.noBlur>div:not(#modal){
    filter: blur(0px) ;
    -webkit-filter: blur(0px) ;
    -moz-filter: blur(0px) ;
    -o-filter: blur(0px) ;
    -ms-filter: blur(0px) ;
    transition-property: filter;
    transition-duration: 0.5s;
  }
  #body::after{
  clear: both;
  }
  #principal{
    margin-top: 40px;
  }
</style>

<template>
  <div id="body" :class="isBlured">
    <sidbar></sidbar>
      <router-view>
      </router-view>

  </div>
</template>

<script>
  import sidbar from 'src/Modules/Sidbar/Templates/sidbar'
  import home from 'src/Modules/Pages/Templates/home'
  import {
    modal
  } from 'src/Modules/Modal/Services/getters'

  export default {
    vuex: {
      getters: {
        modal
      }
    },
    computed: {
      isBlured () {
        if (this.modal) {
          return 'blur'
        } else {
          return 'noBlur'
        }
      }
    },
    components: {
      sidbar,
      home
    }
  }
</script>