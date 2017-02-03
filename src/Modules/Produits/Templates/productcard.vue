<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  .product{
    // @include media(769px , 12) {
    //   @include span-columns(4 of 12);
    // }
    @include media(1500px , 12) {
      @include span-columns(3);
      @include omega(4n);
    }
    @include media(min-width 1000px max-width 1500px , 12) {
      @include span-columns(4);
      @include omega(3n);
    }
    @include media(min-width 780px max-width 1000px , 12) {
      @include span-columns(6);
      @include omega(2n);
    }
    @include media(min-width 0px max-width 780px , 12) {
      @include span-columns(12);
      @include omega;
    }
  }
  .card{
    position:relative;
    margin-bottom: 40px;
    background: url(../../../assets/ombre_porte.png) repeat-y;
    background-size: 100%;
    &.product {
      text-decoration: none;
    }
    .prix{
      height: 30px;
      text-align: right;
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      color: #e62f24;
      .grey{
        color: #202020;
      }
    }
    .actions {
      display: flex;
      justify-content: center;
      position:absolute;
      bottom: -23px;
      left: 0px;
      right: 0px;
      z-index:10;
      list-style: none;
      padding-left: 0px;
      .action{
        display: flex;
        width: 40px;
        margin: 3px;
        margin-left: 10px; margin-right: 10px;
        height: 40px;
        padding: 5px;
        border-radius: 20px;
        background: white;
        
        box-shadow: none;

      }
      .action:hover, .action.active{
        -moz-box-shadow: 0px 3px 7px rgba(32, 32, 32, 0.34); 
        -webkit-box-shadow: 0px 3px 7px rgba(32, 32, 32, 0.34); 
        box-shadow: 0px 3px 7px rgba(32, 32, 32, 0.34);
      }
      .pict{
        margin:auto;
      }
      .show .pict{
        height: 28px;
        width: 25px;
        background: url(../../../assets/look.png) bottom;
        background-size:100%
      }
      .accessoire .pict{
        height: 27px;
        width: 25px;
        background: url(../../../assets/accessoire.png) bottom;
        background-size:100%
      }
      .close .pict{
        height: 27px;
        width: 25px;
        background: url(../../../assets/accessoire.png) bottom;
        background-size:100%
      }
      .fav .pict{
        height: 27px;
        width: 24px;
        background: url(../../../assets/fav.png) bottom;
        background-size:100%
      }
      .del .pict{
        height: 24px;
        width: 24px;
        background: url(../../../assets/delete.png) bottom;
        background-size:100%
      }
      .thumb .pict{
        height: 28px;
        width: 24px;
        background: url(../../../assets/thumb.png) bottom;
        background-size:100%
      }
      .action.active .pict{
        background-position: top;
      }
      .action:hover .pict{
        background-position: top;
      }
    }

  }
  .card:before {
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
  .card:after {
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
  .card:hover{
    cursor:pointer;
    .show{
      -moz-box-shadow: 0px 3px 7px rgba(32, 32, 32, 0.34); 
        -webkit-box-shadow: 0px 3px 7px rgba(32, 32, 32, 0.34); 
        box-shadow: 0px 3px 7px rgba(32, 32, 32, 0.34);
      .pict {
        background-position: top;
      }
    }
  }
  .content{
    padding: 8px 20px 20px 20px;
  }
  
  .titre{
    min-height: 75px;
  }
  .title{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #525252;
  }
  .ref{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #e62f24;
  }
  .thumb{
    position:relative;
    //min-height: 200px;
    height: 150px;
  }

</style>
<style scoped>
  .auth__dispatch{
    display: inline-flex;
  }
</style>
<template>
  <router-link class="product card" :to="{ name: 'produitshow', params: { slug: product.slug, id: product.id}}">
    <div class="content">
      <div class="titre">
        <h3 class="title">{{product.name}}</h3>
        <h4 class="ref">{{product.ref}}</h4>
      </div>
      <div class="thumb">
        <thumb 
          :src="file" 
          :width="150" 
          :height="150" >
            
        </thumb>
      </div>
      
      <h5 class="prix" v-if="product.prix">{{product.prix}}€ <span class="grey">HT</span></h5>
      <h5 class="prix" v-if="!product.prix"></h5>
    </div>
    <ul class="actions">
      <li>
        <a href="#" class="action show" >
          <div class="pict"></div>
        </a>
      </li>
      <authDispatch :conditions="['admin', 'rev']">
        <li>
          <a href="#" class="action fav" ><div class="pict"></div></a>
        </li>
        <li>
          <a href="#" class="action accessoire" ><div class="pict"></div></a>
        </li>  
      </authDispatch>

    </ul>
  </router-link>
</template>

<script>
  import thumb from 'src/Modules/Medias/Templates/thumb'
  import authDispatch from 'src/Modules/Auth/Elements/authDispatch'
  import _ from 'lodash'

  export default ({
    name: 'productCard',
    props: {
      product: {
        type: Object
      }
    },
    computed: {
      file () {
        if (!_.isEmpty(this.product.thumb)) {
          return this.product.thumb.file
        } else {
          return false
        }
      },
      image () {
      }
    },
    components: {
      thumb,
      authDispatch
    }
  })
</script>