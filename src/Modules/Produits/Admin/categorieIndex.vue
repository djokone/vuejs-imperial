<template>
  <div></div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'categorieIndex',
    computed: {
      ...mapGetters({
        allProducts: 'allProducts'
      })
    }
  }
</script>