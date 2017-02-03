<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  #footer{
    box-shadow:  9px 7px 11px 8px rgba(0, 0, 0,0.5);
    position: relative;
    margin-top: 80px;
    background: #202020;
    @include fill-parent;
    padding: 0px 3em;
    color: #FEFEFE;
    .bande{
      position: absolute;
      left: 0; right:0; top: 0;
      background: #e3001b;
      height: 10px;
    }
    h3{
      color: #e3001b;
      margin-bottom: 1em;
    }
    ul{
      padding-left: 0px;
      list-style: none;
      a{
        color: #FEFEFE;
        text-decoration: none;
        font-family: 'Montserrat'
      }
      a:hover{
        text-decoration: underline;
      }
    }
    .contain{
      @include clearfix;
      padding: 4em 0px;
      >div{
        @include span-columns(4 of 12)
        @include omega(3n)
        text-align: center;
        @include media(max-width 930px , 12) {
          margin-top: 40px;
          img{
            width: 30%;
          }
          @include span-columns(12)
        }
      }
      img{
        margin-top: 2em;
        width: 50%;
      }
      
    }
    .contact{
      button{
        background: none;
        font-family: 'Montserrat';
        padding: 20px;
        border: 1px #e3001b solid;
        color: #FEFEFE;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 1em;
        width: 100%;
      }
      input, textarea{
        font-family: 'Montserrat';
        border: none;
        padding: 10px;
        box-shadow: none;
        width: 100%;
        max-width: 100%;
        margin: 10px 0px;
        color: #808080;
        background: #353535;
      }
      textarea{
        min-height: 150px;
      }
    }
    .copyright{
      padding: 10px;
      font-size: 0.75em;
    }
  }
</style>

<template>
  <div id="footer">
    <div class="bande">
    </div>
    <div class="contain">
      <div class="coordonnees">
        <h3>Bureau de Vente Européen</h3>
        <p>
          Imperial International <br>
          1 rue de la Fontaine,<br>
          77700 SERRIS FRANCE <br>
          Tél: (+33) 01.85.49.01.10<br>
          Fax: (+33) 09.72.47.75.83 <br>
          E-mail: sales@imperialinternational.eu<br>
          <img src="/static/Imperial-International.png" alt="">
        </p>
      </div>
      <div class="mentions">
        <h3>Mentions & accessibilité</h3>
        <ul>
          <li><router-link :to="{name: 'mentions'}">Mentions légales</router-link></li>
          <li><router-link :to="{name: 'cgv'}">Conditions générales de vente</router-link></li>
          <!-- <li><router-link :to="{name: 'plan'}">Plan du site</router-link></li> -->
          <li><!-- <router-link :to="{path: 'popup/construction'}" append>News</router-link> --></li>
          <li><router-link :to="{name: 'revendeurs'}">Nos revendeurs</router-link></li>
          <li><router-link :to="{name: 'marques'}">Nos marques</router-link></li>
          <li><router-link :to="{name: 'produits'}">Nos produits</router-link></li>
        </ul>
      </div>
      <div class="contact">
        <form action="">
          <h3>Nous contacter</h3>
          <input type="text" placeholder="Votre email :">
          <input type="text" placeholder="Votre sujet :">
          <textarea placeholder="Votre message :">Votre message :</textarea>
          <router-link :to="{path: 'popup/construction', append: true}">Envoyer</router-link>
          
        </form>
      </div>
    </div>
    <p class="copyright">Développé & designé par <span class="red">Timothy POTTER</span> - Copyright  2016 <span class="red">Imperial International</span></p>
  </div>
</template>

<script>
export default ({
  name: 'Footer'
})
</script>