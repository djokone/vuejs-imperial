<template>
  <ul class="header small_menu">
    <li class="logo item_menu">
       <img src="../../../assets/Imperial-International.png" alt="">
    </li>
    <li class="item_menu">
      <a 
        class="btn_for_responsive"
        @click.prevent="changeState">
        <img src="/static/burgerMenu.png" class="burgerMenu__small">
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'smallBar',
    methods: {
      changeState () {
        this.$emit('switch')
      }
    }
  }
</script>