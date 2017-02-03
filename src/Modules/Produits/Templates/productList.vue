<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  .productList{
    @include fill-parent;
  }
  .productList{
    // margin-top: 60px;
  }
</style>

<template>
  <div class="productList">
      <productcard v-for="produit in products" :product="produit" v-if="produit.online>=1"></productcard>
  </div>
</template>

<script>
  import productcard from './productcard'
  
  export default ({
    name: 'productlist',
    props: {
      products: {
        type: Array
      }
    },
    components: {
      productcard
    }
  })
</script>