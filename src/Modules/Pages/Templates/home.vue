<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  .btn_red{
    display: inline-block;
    text-align:center;
    padding: 20px;
    font-size: 1.5em;
    color: #353535;
    font-weight: bold;
    text-decoration: none;
    margin-top: 3em;
    @include span-columns(5 of 9)
    @include shift(2)
    // text-transform: uppercase;
    border: 1px solid #e3001b;

  }
  .big_title{
    font-size: 2.2em;
  }
  #home{
    margin-top: 50px;
    // @include span-columns(9 of 12);
    #intro{
      .text{
        @include span-columns(6 of 9);
      }
      .img{
        @include span-columns(3 of 9);
        img{
          width: 100%;
        }
      }
    }
    #outils {
      background: #F9F9F9;
      .imgs{
        @include fill-parent();
      }
      .img{
        height: 100px;
      }
      .outil{
        @include span-columns( 3 of 9)
        img{
          height:100%;
          // @include shift(1)
        }
        p{
          font-size: 1.5em;
          padding: 10px;
          text-align: center;
          @include span-columns( 3 of 3)
        }
      }
      .big_title{
        margin-bottom: 2em;
      }
      .text{
        text-align: center;
        @include span-columns(5 of 9)
        @include shift(2)
        margin-bottom: 3em;
      }
    }
    /*//////////////////////////////////////
    * Catalogue section
    * 
    */////////////////////////////////////*/
    
    #catalogue{
      // @include span-columns(9 of 9);
      // @include clearfix;
      .big_title{ 
        text-align: center; 
        margin-bottom: 2em;
      } 
      .catalogue{
        display:block;
        position: relative;
        @include span-columns(3 of 9);
        .hover{
          display: flex;
          justify-content: center;
          @include transition(background 0.3s ease-in-out);
          background: rgba(227, 0, 27, 0);
          position: absolute;
          top: 0px; bottom: 0px; left: 0px; right: 0px;
          p.link{
            align-self: center;
            @include transition(opacity 0.5s ease-in-out);
            opacity: 0;
            margin-top: 1em;
            font-size: 2em;
            font-family: 'Montserrat';
            font-weight: bold;
            color: white;
            text-align: center;
            img{
              margin-top: 1em;
            }
          }
        }
        &:hover{
          .hover{
            background: rgba(227, 0, 27, 0.8);
            p.link{
              opacity: 1;
            }
          }
        }
      }
      .liens{
        height: 100px;
        width: 100%;
      }
      .img{
        display:block;
        position:relative;
        width: 100%;
        height:auto;
        overflow: hidden;
      }
      img.cover{
        width: 100%;
      }
    }
    .contain {
      @include clearfix;
      padding: 40px 0px;
      &:first-of-type{
        padding-top: 0px;
      }
    }
  } 
</style>

<template>
  <div id="__home_container">
    <!-- <router-view></router-view> -->
    <div id="home">
      <div class="contain" id="catalogue">
        <div class="text">
          <h2 class="big_title">Téléchargez <span class="red"> 
          nos catalogues 
          </span></h2> 
        </div> 
        <a href="http://imperialinternational.eu/files/catalogueWaring.pdf" download="waring-catalogue-2016" class="catalogue">
          <div class="hover">
            <p class="link">
              Télécharger <br> ce catalogue
              <br>
              <img src="../../../assets/download.png" alt="">
            </p>
          </div>
          <img src="../../../assets/catalogue-waring.png" class="cover" alt="">
        </a>
        <a href="http://imperialinternational.eu/files/Catalogue2016num.pdf" download="imperial-international-catalogue-2016" class="catalogue">
          <div class="hover">
            <p class="link">
              Télécharger <br> ce catalogue
              <br>
              <img src="../../../assets/download.png" alt="">
            </p>
          </div>
          <img src="../../../assets/catalogue-imperial.png" class="cover" alt="">
        </a>
        <a href="http://imperialinternational.eu/files/catalogueHatco.pdf" download="htaco-catalogue-2016" class="catalogue">
          <div class="hover">
            <p class="link">
              Télécharger <br> ce catalogue
              <br>
              <img src="../../../assets/download.png" alt="">
            </p>
          </div>
          <img src="../../../assets/catalogue-hatco.png" class="cover" alt="">
        </a>
      </div>
      
      <div class="contain" id="outils">
        <div class="text">
          <h2 class="big_title">
            Vous êtes <span class="red">revendeur ?</span><br>
            Nous avons également pensez à vous ! 
          </h2>
        </div>
        <div class="imgs">
          <div class="outil">
            <div class="img">
              <img src="../../../assets/fiche.png" alt="">
            </div>
            <p>
      
              Générez vos fiches produits personalisables
            </p>
          </div>
          <div class="outil">
            <div class="img">
              <img src="../../../assets/siteweb.png" alt="">
            </div>
            <p>
              Référencez votre site marchand
            </p>
          </div>
          <div class="outil">
            <div class="img">
              <img src="../../../assets/syncro.png" alt="">
            </div>
            <p>
              Soyez informé de la disponibilité de nos produits
            </p>
          </div>
        </div>
      </div>

      <div class="contain" id="intro">
        <div class="text">
          <h1 class="big_title">Retrouvez tous <span class="red">nos revendeur</span> pour commander vos matériels de cuisine professionnelle <span class="red"> partout en france 
          </span></h1>
          <p>
            <router-link :to="{name: 'revendeurs'}" class="btn_red">Trouvez votre revendeur</router-link>
          </p>
        </div>
        <div class="img">
          <img src="../../../assets/carte.png" alt="">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import sidbar from 'src/Modules/Sidbar/Templates/sidbar'
  import productList from 'src/Modules/Produits/Templates/productList'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        products: 'products'
      })
    },
    data () {
      return {
      }
    },
    mounted () {
    },
    components: {
      sidbar,
      'product': productList,
      loader
    }
  }
</script>