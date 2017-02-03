<template>
  <div class="menu_for_responsive" v-if="OpenLocal" @click="close">
    <div class="list_for_responsive">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menuForResponsive',
    data () {
      return {
        OpenLocal: false
      }
    },
    props: {
      isOpen: {
        default: false
      }
    },
    watch: {
      isOpen (val) {
        this.OpenLocal = val
      }
    },
    methods: {
      close () {
        this.OpenLocal = false
      }
    },
    computed () {
    }
  }
</script>