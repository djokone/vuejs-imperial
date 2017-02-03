<style lang="scss">
</style>

<template>
  <modal title="Se connecter">
    <router-link :to="{ name: 'test'}">test</router-link>
    <login></login>
  </modal>
</template>

<script>
import modal from 'src/Modules/Modal/Templates/modal'
import login from '../Templates/login'

export default {
  components: {
    modal,
    login
  }
}
</script>