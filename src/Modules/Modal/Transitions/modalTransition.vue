<style lang="scss">
</style>

<template>
  <modal>
    <router-view></router-view>
  </modal>
</template>

<script>
import modal from '../Templates/modal'

export default {
  components: {
    modal
  }
}
</script>