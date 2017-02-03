<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #navigation{
    height: 30px;
    @include clearfix;
  }
</style>
<template>
  <div id="__productTransition">
    <router-view></router-view>
    <div :class="etat">
      <div id="navigation">
        <arianne :path="currentPath"></arianne>
      </div>
      <loader v-if="!isLoaded"></loader>
      <product v-if="isLoaded"></product>
    </div>
  </div>
  
</template>

<script>
  // import { getProduct } from '../Services/actions'
  import sidbar from 'src/Modules/Sidbar/Templates/sidbar'
  import productShow from '../Templates/productShow'
  import filArianne from 'src/Modules/FilAriane/Templates/filarianne'
  // import {currentPath} from 'src/Modules/Categories/Services/getters'
  // import {etat} from 'src/Modules/Sidbar/Services/getters'
  // import {isLoaded, product} from '../Services/getters'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
    data () {
      return {
        // test: this.product.name
      }
    },
    head: {
      title: function () {
        // if (this.product.) {}
        return {
          i: this.test
        }
      }
    },
    computed: {
      ...mapGetters({
        currentPath: 'categoriePath',
        etat: 'etat',
        isLoaded: 'isProductLoaded',
        product: 'product'
      })
    },
    methods: {
      ...mapActions({
        getProduct: 'getProduct'
      })
    },
    watch: {
      $route () {
        this.getProduct()
      }
    },
    // http: {
    //   header: {
    //     common: [
    //       'Content-Type': 'application/json'
    //     ]
    //   }
    // },
    // activate (transition) {
    //   transition.next
    // },
    mounted () {
    },
    components: {
      sidbar,
      loader,
      'product': productShow,
      'arianne': filArianne
    }
  }
</script>