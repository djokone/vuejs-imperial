<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  $big: new-breakpoint(min-width 1300px);
  
  .map_vector{
    margin-top: 20px;
    @include span-columns(12 of 12)
    @include media($big) {
      @include span-columns(6 of 12)
    }
  }
  .map_list{
    @include span-columns(12 of 12)
    @include media($big) {
      @include span-columns(6 of 12)
    }
  }
  // #revendeur{
  //   @include span-columns(9 of 12)
  //   // @include outer-container;
  //   // display:block;
  //   // margin-top: 20px;
  // }
  .clear{
    height: 0px;
    width: 0px;
    clear:both;
  }
  .conteneur{
    @include clearfix;
  }
  #compterev{
    padding: 40px 0px;
  }
  .bigTitle{
    font-size: 3em;
    text-align: center;
  }
  .clicktoaction{
      display:flex;
  }
  .comptebtn{
    display:block;
    margin: 40px auto;
    margin-bottom: 0px;
    text-decoration:none;
  }

</style>

<template>
  <div id="revendeur__conteneur">
    <div id="compterev">
      <h2 class="bigTitle">Vous êtes revendeur <span class="red">chez nous</span>,<br> référencez vous sur notre site pour apparaître sur la carte ...</h2>
      <div class="clicktoaction">
        <router-link class="comptebtn submit" :to="{name: 'signup'}">Créer votre compte revendeur</router-link>
      </div>
    </div>

    
    <div class="conteneur">
      <my-map @hover="changeSelectedRegion" :selected="selectedRegion"></my-map>
      <list 
        :selected="selectedRegion" 
        @hover="changeSelectedRegion" 
        :mytype="type"
        :selectedrev="selectedRev"
        >
          <h1 class="title">Trouvez votre revendeur :</h1>
        </list>
      <!-- <div class="clear"></div> -->
    </div>
    <!-- <div class="clear"></div> -->
    
  </div>
</template>

<script>
  import datas from '../Datas/regions-path'
  import myMap from './map'
  import list from './map-list'
  import _ from 'lodash'
  // import {revendeurs} from '../Services/getters'
  import { mapGetters } from 'vuex'

  export default ({
    data () {
      return {
        datas: datas,
        type: 'map',
        region: false,
        selectedRegion: false
      }
    },
    head: {
      title: {
        inner: 'It will be a pleasure'
      }
    },
    mounted () {
      this.updateType()
    },
    watch: {
      '$route': 'updateType'
    },
    computed: {
      ...mapGetters({
        revendeurs: 'revendeurs'
      }),
      datasOrdered () {
        return _.orderBy(this.datas, ['name'], ['asc'])
        // return this.datas
      },
      selectedRev () {
        return this.revendeurs.filter((v) => {
          let cond = false
          if (!_.isEmpty(this.$route.params) && !_.isEmpty(this.datasOrdered)) {
            this.datasOrdered[this.$route.params.id].departements.forEach((dep) => {
              if (!cond && dep === parseInt(v.departement)) {
                cond = true
              }
            })
            return cond
          } else { return false }
        })
      }
    },
    methods: {
      updateType () {
        if (typeof this.$route.params.id !== 'undefined') {
          this.type = 'rev'
        } else {
          this.type = 'map'
        }
      },
      changeSelectedRegion (index, from) {
        this.selectedRegion = index
        if (from === 'map') {
          list.methods.hover(index)
        }
      }
    },
    components: {
      myMap,
      list
    }
  })
</script>