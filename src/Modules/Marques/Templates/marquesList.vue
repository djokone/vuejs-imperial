<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  .clearfix{
      @include fill-parent;
      @include clearfix;
    }

  .marque{
      margin-bottom: 20px;
    // @include clearfix;
    .btn{
      margin: 10px 0px;
    }
    .btn:last-of-type{
      margin-bottom: 20px;
    }
    .text{
      p{
        margin-top:10px;
        font-family: arial;
        font-size: 16px;
      }
      @include span-columns(9 of 12)
    }
    .logo{
      // height: 100px;
      @include span-columns(3 of 12)
    }
  }
</style>

<template>
<div id="marques__list">
  <loader v-if="!isLoaded"></loader>
  <div id="marques" v-if="isLoaded">
    <div v-for="marque in marques" class="marque">
      <div class="clearfix"> 
        <div class="text">
          <h2>{{marque.name}}</h2>
          <p v-html="marque.info">
            {{marque.info}}
          </p>
        </div>
        <div class="logo" v-if="hasThumb(marque)">
          <thumb :width="width" :height="height" :src="marque.thumb.file"></thumb>
        </div>

      </div>
      <router-link 
        :to="{name: 'marque', params:{id: marque.id, slug: marque.slug}}" 
        class="btn">
          Voir les produits {{marque.name}}
      </router-link>
      <a 
          v-if="marque.website !== ''" 
          :href="'http://' + marque.website"
          target="_blank" 
          class="btn">
            Site officiel
      </a>
      <hr>
    </div> 
  </div>
</div>
</template>

<script>
  import _ from 'lodash'
  import { mapGetters } from 'vuex'
  import thumb from 'src/Modules/Medias/Templates/thumb'
  import loader from 'src/Modules/Loader/Templates/loader'
  export default ({
    data () {
      return {
        width: 200,
        height: 200
      }
    },
    computed: {
      ...mapGetters({
        marques: 'marques',
        isLoaded: 'isMarqueLoaded'
      })
    },
    methods: {
      hasThumb (marque) {
        return !_.isEmpty(marque.thumb)
      }
    },
    components: {
      thumb,
      loader
    }
  })
</script>