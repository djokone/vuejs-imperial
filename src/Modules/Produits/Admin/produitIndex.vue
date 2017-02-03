<template>
  <div>
    <h2>Liste des produit</h2>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Nb modèles</th>
          <th>Etat</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products">
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.sousproduits.length}}</td>
          <td>{{product.online}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'produitIndex',
    computed: {
      ...mapGetters({
        products: 'allProducts'
      })
    }
  }
</script>