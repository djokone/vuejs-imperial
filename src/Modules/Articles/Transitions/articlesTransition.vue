<style>
</style>

<template>
  <div>
    <articles-Lists :posts="posts" v-if="isLoaded"></articles-lists>
    <loader v-if="!isLoaded"></loader>
  </div>
</template>

<script>
  import articlesLists from '../Templates/articles-list'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapGetters } from 'vuex'

  export default({
    name: 'articlesTransition',
    computed: {
      ...mapGetters({
        posts: 'posts',
        isLoaded: 'isPostLoaded'
      })
    },
    components: {
      articlesLists,
      loader
    }
  })
</script>