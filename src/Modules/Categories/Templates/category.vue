<style lang="scss">
  @import "src/scss/config";
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #categorie{
    // @include span-columns(9 of 12);
    // @include omega;
    img{
      @include fill-parent()
    }
    h2{
      margin-top: 20px;
      margin-bottom: 10px;
    }
    p{
      margin-bottom: 30px;
      a{
        text-decoration: none;
        font-weight: bold;
        color: #e3001b;
      }
    }
  }
</style>

<template>
  <div id="categorie__container">
    <div id="categorie" v-if="isLoaded">
      <thumb 
        v-if="hasThumb"
        :mode="'crop'" 
        :src="data.thumb.file"
        :width="width"
        :height="height">
      </thumb>
      <h2>{{title}}</h2>
      <p v-html="data.content">
      </p>
    </div>
    <loader v-if="!isLoaded"></loader>
  </div>
</template>

<script>
  import _ from 'lodash'
  import thumb from 'src/Modules/Medias/Templates/thumb'
  import loader from 'src/Modules/Loader/Templates/loader'

  export default ({
    props: {
      data: {
        type: Object
      }
    },
    data () {
      return {
        height: 300,
        width: {val: 100, unity: '%'}
      }
    },
    computed: {
      isLoaded () {
        if (!_.isEmpty(this.data)) {
          return true
        } else {
          return false
        }
      },
      title () {
        if (this.titre === '') {
          return this.data.name
        } else {
          return this.data.titre
        }
      },
      hasThumb () {
        if (!_.isEmpty(this.data.thumb)) {
          return true
        } else {
          return false
        }
      },
      thumb () {
        if (this.hasThumb) {
          return 'http://localhost/Cakephp3/imperial' + this.data.thumb.file
        } return ''
      }
    },
    components: {
      thumb,
      loader
    }
  })
</script>