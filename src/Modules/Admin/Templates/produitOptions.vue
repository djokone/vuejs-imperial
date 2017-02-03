<style lang="scss">
  .__workSidbar{
    position: fixed;
    left: 120px; top: 0px; bottom: 0px; width: 120px;
    background: #e3001b;
    svg .icone{
      fill: #FEFEFE;
    }
    .__edition_bar{
      margin-top: 157px;
    }
    ul{
      list-style:none;
      padding: 0px;
    }
    .btn_icone{
      margin: 0px 0px;
      padding: 20px 30px;
      &:hover{
        background: white;
        svg .icone{
          fill: rgba(0,0,0,0.7)
        }
      }
      // a{
      //   margin: -20px;
      // }
    } 
    .btn_icone.__work {
      padding: 20px 40px;
    }
  }
</style>
<template>
  <div class="__workSidbar">
    <ul class="__edition_bar">
      <li class="btn_icone __work">
        <router-link :to="{name: 'produitAdd'}">
          <addprojetIcone></addprojetIcone>
        </router-link>
      </li>
      <li class="btn_icone">
        <router-link :to="{name: 'categorieAdd'}">
          <addCatIcone></addCatIcone>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import addCatIcone from 'src/Modules/Icones/Templates/addCatIcone'
  import addprojetIcone from 'src/Modules/Icones/Templates/addprojetIcone'
  export default {
    name: 'produitOptions',
    components: {
      addCatIcone,
      addprojetIcone
    }
  }
</script>