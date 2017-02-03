<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #revendeur {
    @include fill-parent;
    padding: 0px 3em ;
  }
</style>

<template>
  <div id="revendeur">
<!--     <router-view>
    </router-view> -->
    <revendeur v-if="isLoaded"></revendeur>
    <loader v-else></loader>
  </div>
  
</template>

<script>
  import revendeur from 'src/Modules/Revendeurs/Templates/revendeur'
  import loader from 'src/Modules/Loader/Templates/loader'
  // import { isLoaded } from 'src/Modules/Revendeurs/Services/getters'
  import { mapGetters } from 'vuex'
  export default ({
    name: 'revendeurTransition',
    head: {
      title: {
        inner: 'Revendeurs'
      }
    },
    computed: {
      ...mapGetters({
        isLoaded: 'isRevendeurLoaded'
      })
    },
    components: {
      revendeur,
      loader
    }
  })
</script>