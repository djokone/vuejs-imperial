<style lang="scss">
  .__card{
    position:relative;
    display: block;
    margin-bottom: 40px;
    background: url(../../../assets/ombre_porte.png) repeat-y;
    background-size: 100%;
    h3{
    padding-top: 10px;
    padding-left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #525252;
    }
    h4{
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      color: #e62f24;
    }
  }
  .__card:before {
    content: '';
    position: absolute;
    background: url(../../../assets/ombre-top.png) no-repeat top center;
    background-size: 100%;
    // z-index: -1;
    top: -9px;
    margin: 0 auto;
    bottom:0;
    left:0;
    right:0;
    -moz-background-size:100% 9px;
    background-size:100% 9px;
  }
  .__card:after {
    content: '';
    position: absolute;
    background: url(../../../assets/bord-bottom.png) no-repeat bottom center;
    background-size: 100%;
    // z-index: -1;
    bottom: -8px;
    margin: 0 auto;
    top:0;
    left:0;
    right:0;
    -moz-background-size:100% 8px;
    background-size:100% 8px;
  }
  .__card:hover{
    cursor:pointer;
  }
</style>

<template>
  <!-- <div class="__card" :class="classes"> -->
    <router-link :to="link" tag="div" class="__card" :class="classes">
      <div class="title">
        <h3>{{h3}}</h3>
        <h4 v-if="h4">{{h4}}</h4>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </router-link>
  <!-- </div> -->
</template>

<script>
  export default ({
    props: {
      h3: {
        required: true
      },
      h4: {
        default: false
      },
      link: {
        type: Object
      },
      classes: {
        type: String
      }
    }
  })
</script>