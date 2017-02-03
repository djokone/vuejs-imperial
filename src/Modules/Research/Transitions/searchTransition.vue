 <style lang="scss">
   @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  // #product{
  //   @include span-columns(9 of 12)
  // }
 </style>

 <template>
  <div id="search__transition">
    <router-view></router-view>
    <div class="etat">
      
      <loader v-if="!isLoaded"></loader>
      <div id="product" v-if="isLoaded">
        <h1>Research pour "{{term}}"</h1>
        <h2>{{products.length}} resultat(s)</h2>
        <br>
        <product v-if="isLoaded" :products="products">
        </product>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import filArianne from 'src/Modules/FilAriane/Templates/filarianne'
  import productList from 'src/Modules/Produits/Templates/productList'
  import loader from 'src/Modules/Loader/Templates/loader'

  export default {
    name: 'searchTransition',
    data () {
      return {
        referer: false
      }
    },
    computed: {
      ...mapGetters({
        products: 'searchProducts',
        isLoaded: 'isProductLoaded',
        term: 'term'
      })
    },
    methods: {
      ...mapActions({
        update: 'updateTerm'
      })
    },
    beforeRouteEnter (to, from, next) {
      let link = {
        name: from.name,
        params: from.params
      }
      next(vm => {
        vm.referer = link
      })
    },
    watch: {
      term (val) {
        if (val === '' && this.referer) {
          this.$router.push(this.referer)
        }
      }
    },
    beforeRouteLeave (to, from, next) {
      this.update('')
      next()
    },
    mounted () {
    },
    components: {
      'product': productList,
      loader,
      'arianne': filArianne
    }
  }
</script>