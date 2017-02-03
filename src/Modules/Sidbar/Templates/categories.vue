
<template>
  <div class="sidebar sidebar_categorie">
  <div v-if="isCategorieLoaded">
    <h2>Catégories</h2>
    <list
      name="categorieshow"
     :items="categories" 
     :path="currentPath" 
     :selected="selectedCategorie" 
     >
       <!-- @select="selectCat" -->
     </list>
    
  </div>
  <loader v-if="!isCategorieLoaded">
  </loader>
  </div>
</template>

<script>
  import list from 'src/Modules/Lists/Templates/list'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapGetters, mapActions } from 'vuex'

  export default ({
    name: 'categories',
    computed: {
      ...mapGetters({
        categories: 'categories',
        categorie: 'categorie',
        selectedCategorie: 'selectedCategorie',
        currentPath: 'currentPath',
        isCategorieLoaded: 'isCategorieLoaded'
      })
    },
    data () {
      return {
        // isLoaded: false,
        categoriesList: {}
      }
    },
    mounted () {
    },
    // computed: {
    //   categoriesList () {
    //     return this.categories
    //   }
    // },
    methods: {
      ...mapActions({
        selectCategorie: 'selectCategorie'
      })
      // selectCat () {
        // this.selectCategorie(this.$route.params.id)
      // }
    },
    components: {
      list,
      loader
    }
  })
</script>