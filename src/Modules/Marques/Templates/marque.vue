<style lang="scss">
  #marque {
    .infoMarque{
      margin-bottom: 100px;
    }
  }

</style>

<template>
  <div id="marque" class=" marque">
    <div class="infoMarque">
      <div class="clearfix"> 
        <div class="text">
          <h2>{{title}}</h2>
          <p v-html="marque.info">
          </p>
        </div>
        <div class="logo" v-if="hasThumb(marque)">
          <thumb 
            :width="width" 
            :height="height"
            :src="marque.thumb.file">
          </thumb>
        </div>
      </div>
      <a 
        v-if="marque.website !== ''" 
        :href="'http://'+ marque.website"
        target="_blank" 
        class="btn">
            Visitez <span class="Red">{{marque .website}}</span>
      </a>
    </div>
    
    <products :products="marqueProducts" v-if="isLoaded">
    </products>
    <loader v-else></loader>
  </div>
  
</template>

<script>
  import _ from 'lodash'
  import loader from 'src/Modules/Loader/Templates/loader'
  import thumb from 'src/Modules/Medias/Templates/thumb'
  import { mapGetters } from 'vuex'
  import products from 'src/Modules/Produits/Templates/productList'
  export default ({
    name: 'Marque',
    methods: {
      hasThumb (marque) {
        return typeof marque.thumb !== 'undefined'
      }
    },
    data () {
      return {
        width: 200,
        height: 200
      }
    },
    computed: {
      ...mapGetters({
        marque: 'marque',
        marqueProducts: 'marqueProducts',
        isLoaded: 'isMarqueLoaded'
      }),
      title () {
        if (!_.isEmpty(this.marque.titreCom)) {
          return this.marque.titreCom
        } else {
          return this.marque.name
        }
      }
    },
    components: {
      thumb,
      products,
      loader
    }
  })
</script>