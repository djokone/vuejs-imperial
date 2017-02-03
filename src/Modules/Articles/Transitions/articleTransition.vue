<style>
</style>

<template>
  <div>
    <article-View :post="post" v-if="isLoaded">
    </article-View>
    <loader v-if="!isLoaded"></loader>
  </div>
</template>

<script>
  import articleView from '../Templates/article-view'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapGetters } from 'vuex'
  
  export default({
    name: 'Article',
    computed: {
      ...mapGetters({
        post: 'post',
        isLoaded: 'isPostLoaded'
      })
    },
    components: {
      articleView,
      loader
    }
  })
</script>