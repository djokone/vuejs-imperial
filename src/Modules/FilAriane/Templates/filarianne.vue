<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #filarianne{
    display:block;
    float:left;
    margin-bottom: -30px;
    @include clearfix;
  }
  .fil{
    position:relative;
    display:inline-block;
    padding: 4px 10px;
    padding-left: 20px;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }
  .fil:visited{
    color: black;
  }
  .fil:nth-of-type(1){
    z-index: 10;
  }
  .fil:nth-of-type(2){
    z-index: 9;
  }
  .fil:nth-of-type(3){
    z-index: 8;
  }
  .fil:nth-of-type(4){
    z-index: 7;
  }
  .fil:first-of-type{
    padding: 4px 10px;
  }
  .fil:nth-of-type(2n+1){
    background: #dedede;
  }
  .fil:nth-of-type(2n){
    background: #f9f9f9;
  }
  .fil:nth-of-type(2n+1):after{
    content: url('../../../assets/arianne.png');
    position: absolute;
    right: -11px; top: 0; bottom: 0;
    height: 100%;
  }
  .fil:nth-of-type(2n):after{
    content: url('../../../assets/arianne-light.png');
    position: absolute;
    right: -11px; top: 0; bottom: 0;
    height: 100%;
  }
  .fil:hover{
    background: #e3001b;
    color: white;
  }
  .fil:hover:after{
    content: url('../../../assets/arianne-hover.png');
    position: absolute;
    right: -11px; top: 0; bottom: 0;
    height: 100%;
  }
</style>

<template>
  <div id="filarianne">
    <router-link 
      v-for="item in path"
      class="fil" 
      :to="{ name: 'categorieshow', params : { slug: item.slug , id: item.id}}">
        {{item.name}}
    </router-link>
  </div>
</template>

<script>
  export default({
    name: 'filarianne',
    props: {
      path: {
        type: Array
      }
    }
  })
</script>