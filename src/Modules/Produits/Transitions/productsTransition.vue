 <style lang="scss">
   @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  // #product{
  //   @include span-columns(9 of 12)
  // }
 </style>

 <template>
 <div id="products__transition">
    <router-view></router-view>
    <div :class="etat">
      
      <loader v-if="!isLoaded"></loader>
      <div id="product" v-if="isLoaded">
        <h1>Tous nos produits</h1>
        <br>
        <product v-if="!loading" :products="allProducts">
        </product>
      </div>
      
    </div>
 </div>
  
</template>

<script>
  // import {allProducts, isLoaded} from '../Services/getters'
  // import {etat} from 'src/Modules/Sidbar/Services/getters'
  import filArianne from 'src/Modules/FilAriane/Templates/filarianne'
  import productList from '../Templates/productList'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Products_transition',
    head: {
      title: {
        inner: 'Tous les produits'
      }
    },
    data () {
      return {
        loading: false,
        scrollPos: 0
      }
    },
    computed: {
      ...mapGetters({
        allProducts: 'allProducts',
        etat: 'etat',
        isLoaded: 'isProductLoaded'
      })
    },
    methods: {
    },
    mounted () {
      // this.$scrollSet()
    },
    components: {
      'product': productList,
      loader,
      'arianne': filArianne
    }
  }
</script>