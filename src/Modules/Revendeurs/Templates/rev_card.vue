<style lang="scss">
  .info{
    a{
      color: white;
    }
  }
</style>

<template>
  <div>
    <p class="info">
      Adresse: <br>
      {{revendeur.adresse}} <br>
      {{revendeur.adresse2}}
      {{revendeur.ville}} - {{revendeur.postal}} <br>
      <span v-if="revendeur.telephone">
        Tel: {{revendeur.telephone}} <br>
      </span>
      <span v-if="revendeur.website">
        Site: <a :href="'http://' + revendeur.website" target="_blank">{{revendeur.website}}</a> <br> 
      </span> 
      <span v-if="revendeur.fax">
        Fax: {{revendeur.fax}} <br>
      </span>
    </p>
  </div>
</template>

<script>
  export default ({
    name: 'revCard',
    props: {
      revendeur: {
        type: Object
      }
    }
  })
</script>