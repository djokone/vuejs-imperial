
<template>
  <div id="marque__transition">
    <router-view></router-view>
    <div :class="etat">
      <marque v-if="isMarqueLoaded">
      </marque>
      <loader v-else></loader>
    </div>
  </div>
</template>

<script>
  import marque from '../Templates/marque'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapGetters } from 'vuex'

  export default ({
    name: 'marqueTransition',
    computed: {
      ...mapGetters({
        etat: 'etat',
        isMarqueLoaded: 'isMarqueLoaded',
        isProductLoaded: 'isProductLoaded'
      })
    },
    components: {
      marque,
      loader
    }
  })
</script>