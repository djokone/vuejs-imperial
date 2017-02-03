
<template>
<div id="marques__transition">
  <router-view></router-view>
  <div :class="etat">
    <marques>
    </marques>
  </div>
</div>

  
</template>

<script>
  import marques from '../Templates/marquesList'
  import { mapGetters } from 'vuex'

  export default ({
    name: 'marquesTransition',
    computed: {
      ...mapGetters({
        etat: 'etat'
      })
    },
    components: {
      marques
    }
  })
</script>