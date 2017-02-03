 <style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #product{
    @include fill-parent();
  }
  

 </style>
 
 <template>
 
  <div :class="sidbarEtat">
    <!-- <router-view></router-view> -->
    <!-- <loader v-if="loading"></loader> -->
    <arianne :path="currentPath"></arianne>
    <category :data="categorie"></category>
    <catlist
      v-if="isLoaded"
      :items="categorie.children"></catlist>
    <div id="product">
      <product v-if="ProductIsLoaded" :products="products">
      </product>
      <loader v-else></loader>
    </div>
    
  </div>
</template>

<script>
  // import { isEmpty } from 'lodash'
  // import {
  //   currentPath,
  //   categories,
  //   categorie,
  //   isLoaded
  // } from '../Services/getters'
  // import {
  //   products,
  //   isLoaded as ProductIsLoaded
  // } from 'src/Modules/Produits/Services/getters'
  // import {
  //   selectCategorie,
  //   initCategories
  // } from '../Services/actions'
  // import {
  //   etat as sidbarEtat
  // } from 'src/Modules/Sidbar/Services/getters'
  // import {
  //   getProducts
  // } from 'src/Modules/Produits/Services/actions'
  import filArianne from 'src/Modules/FilAriane/Templates/filarianne'
  import category from '../Templates/category'
  import catlist from '../Templates/categories-list'
  import productList from 'src/Modules/Produits/Templates/productList'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Categorie_transition',
    // route: {
    //   data: function (transition) {
    //     return this.selectCategorie()
    //   }
    // },
    data () {
      return {
      }
    },
    watch: {
      $route () {
        this.selectCategorie()
      }
    },
    computed: {
      ...mapGetters({
        categories: 'categories',
        products: 'products',
        currentPath: 'categoriePath',
        categorie: 'categorie',
        sidbarEtat: 'etat',
        isLoaded: 'isCategorieLoaded',
        ProductIsLoaded: 'isProductLoaded'
      })
    },
    methods: {
      ...mapActions({
        getProducts: 'getProducts',
        selectCategorie: 'selectCategorie'
      })
    },
    mounted () {
    },
    components: {
      category,
      'product': productList,
      loader,
      catlist,
      'arianne': filArianne
    }
  }
</script>