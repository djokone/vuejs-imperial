<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  #showProduit{
    @include clearfix;
    margin-top: 10px;
    // @include span-columns(9 of 12);
    #media{
      @include span-columns(6 of 9);
      @include media(max-width 945px , 9) {
        @include span-columns(9)
      }
    }
    #tools{
      @include span-columns(3 of 9);
      @include media(max-width 945px , 9) {
        @include span-columns(9)
      }
      .select{
        width: 100%;
        padding: 8px;
        font-size: 12pt;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        background: #f9f9f9;
        border: 1px #dedede solid;

        .option{
            padding: 8px;
        }
      }
    }
    .titre{
      font-size: 24pt;
      line-height: 24pt;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }

    .modele{
      line-height: 24pt;
      font-size: 16pt;
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
    .normal{
      font-weight: bold;
      text-transform: capitalize;
    }
    div.prix{
      margin-top: 90px;
      line-height: 24px;
      text-align: right;
      font-size: 30pt;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      color: #e3001b;
      .dark{
        color: #181818;
      }
      .mention{
        font-size: 14pt;
        color: #181818;
        text-transform: uppercase;
      }
      .tarif{
        line-height: 38px;
      }

    }
    .btn{
      margin: 12px 0px;
    }
    .oneline:before{
      content: url(../../../assets/acheterenligne.png);
      vertical-align: -50%;
      padding: 0 5px 0 0;
    }
    .fiche:before{
      content: url(../../../assets/ficheproduit.png);
      vertical-align: -50%;
      padding: 0 5px 0 0;
    }
    .access:before{
      content: url(../../../assets/accessoires.png);
      vertical-align: -50%;
      padding: 0 5px 0 0;
    }
    .piece:before{
      content: url(../../../assets/piece.png);
      vertical-align: -30%;
      padding: 0 5px 0 6px;
    }
    .desc{
      margin-top: 40px;
      padding: 20px;
      border: 1px #dedede solid;
      font-size: 14pt;
      font-family: 'Montserrat', sans-serif;
      .detail{
        line-height: 30px;
        text-align: right;
        .puissance:after{
          content: url(../../../assets/puissance.png);
          vertical-align: -10%;
          margin-left: 10px;
          margin-right: 3px;
        }
        .poids:after{
          content: url(../../../assets/poids.png);
          vertical-align: -10%;
          margin-left: 10px;
        }
        .dimensions:after{
          content: url(../../../assets/dimension.png);
          vertical-align: -10%;
          margin-left: 10px;
        }
      }
    }
    .plus{
      position: relative;
      display: block;
      font-size: 16pt;
      line-height: 16px;
      text-decoration: none;
      color: #181818;
      margin-bottom: -16px; margin-top: 20px;
      .text{
        line-height: 32px;
        margin-top:10px;
      }
      .picto{
        //position: absolute;
        //right: -20px; bottom: -20px;
        float:right;
        margin-right: -20px;
        padding: 10px;
        display: block;
        background: #e3001b;
        color: white; 
      }
    }
    .plus:hover{
      color: #e3001b;
    }
  }
  #info {
    margin-top: 40px;
    @include span-columns(9 of 9);
    #technique{
      border: 1px #dedede solid;
      padding: 15px;
      font-family: 'Montserrat', sans-serif;
      @include span-columns(6 of 9);
      @include media(max-width 945px , 9) {
        @include span-columns(9)
      }
      .titre{
        color: #e3001b;
        font-size: 18pt;
        min-height: auto;
      }
    }
    #sup{
      @include span-columns(3 of 9);
      @include media(max-width 945px , 9) {
        @include span-columns(9)
      }
      .btn:first-of-type{
        margin-top: 0px;
      }
    }
  }
  #modeles{
    margin-top: 30px;
    float:left;
    width: 100%;
  }
  table.modeles{
    @include media(max-width 945px , 9) {
      display:none;
    }
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    border:none;
    border-spacing:0;
    color: #525252;
    tr{
      &:hover{
        th.ASC:before{
          content: url('../../../assets/asc-red.png');
          display:inline-block;
          margin-right: 5px;
        }
        th.DESC:before{
          content: url('../../../assets/desc-red.png');
          display:inline-block;
          margin-right: 5px;
        }
      }
    }
    thead th{
      padding-bottom: 10px;
    }
    td, th{
      text-align: center;
      border: none;
      padding: 30px 10px;
    }
    td{
      font-weight: 400;
    }
    th{
      vertical-align: top;
      font-weight: 700;
      border-bottom: 2px #f9f9f9 solid;
      &.ASC:before{
        content: url('../../../assets/asc.png');
        display:inline-block;
        margin-right: 5px;
      }
      &.DESC:before{
        content: url('../../../assets/desc.png');
        display:inline-block;
        margin-right: 5px;
      }
    }
    tr:nth-of-type(2n) {
      background: #f9f9f9;
    }
    th:first-of-type, td:first-of-type{
      text-align: left;
    }
    th:last-of-type, td:last-of-type{
      text-align: right;
      
    }
    td:last-of-type{
      color: #e3001b;
    }
    tr:hover{
      cursor:pointer;
    }
    tr:hover{
      color: #e3001b;
    }
    tr.active{
      background: #e3001b;
      color:white;
      td:last-of-type{
        color: white;
      }
    }
  }
</style>

<template>
  <div >
    <loader v-if="!isLoaded"></loader>
    <div v-if="isLoaded" id="showProduit" >
      <div id="resume">
        <!-- Images -->
        <div id="media">
          <h1 class="titre">{{ product.name }}</h1>
          <thumb 
            :src="product.thumb.file" 
            alt="" 
            :height="500"
            :width="{val: 100, unity: '%'}"
            :max="{maxHeight: '500px'}"
            >
          </thumb>
        </div>

        <!-- Outils a droite pour les revendeurs -->
       <div id="tools">
         <div class="selectModele">
           <h2 class="modele">
            <span class="normal">
              Modèle :
            </span>  {{ product.ref }}</h2>
           <select v-model="selected" class="select" @change="changeModele" v-if="hasModele">
            <option value="false">
              Tous les modèles
            </option>
            <option class="option" v-for="(modele, index) in product.sousproduits" :value="modele.id">
              {{ modele.ref+' - '+modele.name }}
            </option>
           </select>
         </div>
          <div class="prix">
            <p><span v-html="prix"></span>€ <span class="dark">HT</span><br>
              <span class="mention">Prix tarif</span>
            </p>
          </div>
          <div class="buttons">
            <router-link :to="{path:'popup/construction', append: true}" class="btn oneline"><span class="red">Acheter</span> en ligne</router-link>
            <a :href="'http://imperialinternational.eu/produits/ficheproduit/' + product.id" download="test" class="btn fiche"><span class="red">Générer</span> une fiche produit</a>
          </div>
          <div v-if="modele" class="desc">
            <p class="detail">
              <span class="puissance">{{modele.puissance}} W </span><br>
              <span class="poids">{{modele.poids}} kg </span><br>
              <span class="dimensions">{{dimensions}} mm</span>
            </p>
            <a href="#" class="plus"><span class="text">Plus d'informations </span><div class="picto">+</div></a>
          </div>
        
      </div>
     </div>
     <div id="info">
       <div id="technique">
         <h2 class="titre">Descriptif de la gamme</h2>
         <p v-html="product.info">
         </p>
       </div>
       <div id="sup">
         <router-link :to="{path:'popup/construction', append: true}" class="btn piece"> Pièces détachées</router-link>
         <router-link :to="{path:'popup/construction', append: true}" class="btn access"> Accessoires</router-link>
         <div v-if="modele" class="desc">
         <h2>Descriptif du modèle</h2>
         <h3 class="red">{{modele.ref}}</h3>
         <br>
         <span v-html="modele.info"></span>
         </div>
       </div>
     </div>
     <div id="modeles" v-if="hasModele">
       <table class="modeles">
         <thead>
           <tr>
             <th @click="changeOrder('ref')"
             :class="orderClass('ref')">
                Référence
             </th>
             <th @click="changeOrder('info')" :class="orderClass('info')">
                Désignation
             </th>
             <th @click="changeOrder('dimensions')" :class="orderClass('dimensions')">
                Dimension LxPxH
             </th>
             <th @click="changeOrder('poids')" :class="orderClass('poids')">
                Poids
             </th>
             <th @click="changeOrder('puissance')" :class="orderClass('puissance')">
                Puissance
             </th>
             <th @click="changeOrder('prix')" :class="orderClass('prix')">
                Prix
             </th>
           </tr>
         </thead>
         <tbody>
          <tr v-for="(modele, index) in sousproduitOrdered" :class="classSelected(modele.id)" @click="selectModel(modele.id)">
            <td>{{modele.ref}}</td>
            <td v-html="modele.info"></td>
            <td>{{modele.largeur}} x {{modele.profondeur}} x {{modele.hauteur}}</td>
            <td>{{modele.poids}}</td>
            <td>{{modele.puissance}}</td>
            <td>{{modele.prix}}€</td>
          </tr>
         </tbody>
       </table>
     </div>
    </div>
  </div>
  
</template>

<script>
// import {getProduct} from 'src/vuex/modules/produits/actions'
import loader from 'src/Modules/Loader/Templates/loader'
import thumb from 'src/Modules/Medias/Templates/thumb'
import _ from 'lodash'
import { mapGetters } from 'vuex'

export default ({
  name: 'productShow',
  data () {
    return {
      scrollPos: 0,
      selected: 0,
      modele: false,
      loading: true,
      order: 'id',
      sens: 1
    }
  },
  computed: {
    ...mapGetters({
      product: 'product',
      isLoaded: 'isProductLoaded'
    }),
    sousproduitOrdered () {
      return _.orderBy(this.product.sousproduits, this.order, this.namedOrder)
    },
    namedOrder: function () {
      if (this.sens < 0) {
        return 'desc'
      } else {
        return 'asc'
      }
    },
    hasModele: function () {
      let d = !_.isEmpty(this.product.sousproduits)
      return d
    },
    dimensions () {
      if (this.modele) {
        return this.modele.largeur + ' x ' + this.modele.profondeur + ' x ' + this.modele.hauteur
      }
    },
    prix () {
      if (!this.hasModele) {
        return this.product.prix
      } else {
        if (!this.modele) {
          let min = 0
          let max = 0
          _.find(this.product.sousproduits, (v) => {
            if (!min) {
              min = v.prix
            }
            if (!max) {
              max = v.prix
            }
            if (min > v.prix && v.prix !== 0) {
              min = v.prix
            }
            if (max < v.prix) {
              max = v.prix
            }
          })
          return '<span class="tarif"><span class="dark">De</span> ' + min + ' <br /><span class="dark">à</span> ' + max + '</span>'
        } else {
          return this.modele.prix
        }
      }
    }
  },
  mounted () {
    this.loading = true
      // console.log(this.$el)
    // this.getProduct().then(() => {
    //   if (!_.isEmpty(this.product.sousproduits)) {
    //     this.selected = this.product.sousproduits[0].id
    //   }
    //   this.loading = false
    // })
  },
  methods: {
    selectModel (id) {
      this.selected = id
      this.changeModele()
    },
    changeOrder (name) {
      if (this.order !== name) {
        this.order = name
      } else {
        this.sens = this.sens * -1
      }
    },
    orderClass (name) {
      if (this.order === name) {
        return this.namedOrder
      } else {
        return ''
      }
    },
    changeModele () {
      this.product.sousproduits.forEach((v) => {
        if (v.id === this.selected) {
          this.modele = v
        }
      })
    },
    classSelected (id) {
      if (id === this.selected) {
        return 'active'
      } else {
        return false
      }
    }
  },
  components: {
    loader,
    thumb
  }
})
</script>