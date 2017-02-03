<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  .map_list{
    // height: 100%;
    // background: black;
    ul{
      padding-left: 0px;
      width: 100%;
      li{
        list-style: none;
        a.list {
          font-family: 'Montserrat';
          padding: 10px;
          display:block;
          border-color: #e3001b;
          background: #171717;
          text-decoration: none;
          color: white;
          cursor: pointer;
          @include transition(all 0.3s $ease-out-quad);
        }
        a.list.selected, a.list:hover{
          padding-left: 20px;
          background:#e3001b;
          @include transition(all 0.3s $ease-in-quad);
        }
      }
    }  
  }
  .rev_scroll{
    width: 100%;
    // min-width: 300px;
    max-height: 500px;
  }
  ul.rev{
    padding-left:0px;
    padding: 5px;
    width: 100%;
    background: #171717;
    min-height: 550px;
    // min-height:100%;
    .rev_item{

    }
    .rev_item:hover{
      background: none;
      border: 1px solid #e3001b;
    }
  }
  .map{
    ul{
      min-height:550px;
    }
  }
  .scroll{
    width: 100%;
    max-height: 550px;
    overflow: hidden;
  }
  .scroll-me{
    height:auto;
  }
  .mCustomScrollBox{ /* contains plugin's markup */
    position: relative;
    overflow: hidden;
    outline: none;
    direction: ltr;
  }
  .search {
    width: 100%;
    input{
      width: 100%;
      border: none;
      background: #e3001b;
      padding: 15px;
      color: white;
      font-size: 1em;
      @include placeholder {
        color: white;
        font-style: italic;
      }
    }
  }
  .reponse{
    padding: 5px 10px 15px 10px;
    background: #171717;
    color: white;
    font-style: italic;
  }
</style>

<template>
  <div class="map_list" id="mapList">
  <slot></slot>
    <div class="title" v-if="mytype === 'map'">
      <h1 v-if="!isSearching">Choisissez votre région</h1>
      <h1 v-if="isSearching">Recherche</h1>
    </div>
    <div class="title" v-if="mytype === 'rev'">
      <h1 v-if="!isSearching">{{sentence}}</h1>
      <h1 v-if="isSearching">Recherche</h1>
    </div>
    <form action="" class="search">
      <input type="text" v-model="search" placeholder="Tapez le nom de votre revendeur"/>
      <div class="reponse" v-if="isSearching">
        <p>{{nbRes}} Résultat pour "{{search}}"</p>
      </div>
    </form>
    <scrollbar v-if="mytype === 'map'">
      <ul class="map">
        <li v-if="isSearching" v-for="rev in searchResult"><a class="list" href="">{{rev.name}}</a></li>
        <li v-if="!isSearching" v-for="(region, index) in regionsOrdered">
          <router-link 
          :id="index"
          :to="{name: 'revshow' , params: { slug: region.slug , id: index}, hash: '#mapList'}"
          class="list"
          :class="selectedClass(index)"
          @mouseover="select(index)"
          >
          {{region.name}}</router-link>
        </li>
      </ul>
    </scrollbar>
      <div v-if="mytype === 'rev'">
        <scrollbar>
          <ul class="rev">
            <li v-if="isSearching" v-for="rev in searchResult">
              <a @click="show(rev.id)" class="list">
                {{rev.name}}
                <rev-Card v-if="rev.id === open_id" :revendeur="rev">
                </rev-Card>
              </a>
            </li>
            <li v-if="!isSearching" v-for="revendeur in selectedrev">
              <a @click="show(revendeur.id)" class="rev_item list">
                {{revendeur.name}}
                <rev-Card v-if="revendeur.id === open_id" :revendeur="revendeur">
                </rev-Card>
              </a>
            </li>
          </ul>
          <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque neque dignissimos error numquam, nostrum reprehenderit beatae minus vel, quibusdam ex voluptate harum unde et, labore voluptatibus, repudiandae a at saepe. -->
        </scrollbar>
      </div>
  </div>
</template>

<script>
import regions from '../Datas/regions-path'
import scrollbar from 'src/Modules/Scrollbar/Templates/scrollbar-malihu'
import { mapGetters } from 'vuex'
import revCard from './rev_card'
import _ from 'lodash'

export default ({
  props: {
    selectedrev: {
    },
    mytype: {
      type: String
    },
    selected: {
    }
  },
  data () {
    return {
      open_id: 0,
      dragging: true,
      regions: regions,
      search: '',
      result: [],
      revSelect: {}
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters({
      revendeurs: 'revendeurs'
    }),
    sentence () {
      if (this.hasRegion) {
        let revplur = 'revendeur'
        if (this.selectedrev.length > 1) {
          revplur = 'revendeurs'
        }
        let liaison = 'en'
        if (!_.isEmpty(this.region.liaison)) {
          liaison = this.region.liaison
        }
        return this.selectedrev.length + ' ' + revplur + ' ' + liaison + ' ' + this.region.name
      }
    },
    regionsOrdered () {
      return _.orderBy(this.regions, ['name'], ['asc'])
    },
    isSearching () {
      return !_.isEmpty(this.search)
    },
    hasRegion () {
      return typeof this.$route.params.id !== 'undefined'
    },
    region () {
      if (this.hasRegion) {
        return _.orderBy(this.regions, ['name'], ['asc'])[this.$route.params.id]
      }
    },
    searchResult () {
      if (this.search !== '') {
        let w = this.search.split(' ')
        return this.revendeurs.filter((v) => {
          let rep = []
          w.forEach((val) => {
            if (!_.isEmpty(val)) {
              val = val.replace(/\s+/g, '')
              let req = new RegExp(val, ['i'])
              rep.push(req.test(v.name))
            }
          })
          let newRep = rep[0]
          rep.forEach((val, key) => {
            if (key && val) {
              newRep = val
            }
          })
          return newRep
        })
      } else {
        return []
      }
    },
    nbRes () {
      return this.searchResult.length
    }
  },
  methods: {
    // revIsWatch (id) {
    //   if (!_.isEmpty(this.revSelect)) {
    //     return this.revSelect.id === id
    //   }
    // },
    // revShow (id) {
    //   this.revSelect = this.selectedRev.filter((v) => {
    //     return v.id === id
    //   })
    // },
    show (id) {
      this.open_id = id
    },
    hover (index) {
      scrollbar.methods.scrollto(index)
    },
    select (index) {
      this.$emit('hover', index, 'list')
    },
    isSelected (index) {
      let selected = false
      if (typeof this.$route.params.id !== 'undefined') {
        selected = parseInt(this.$route.params.id) === index
      }
      return this.selected === index || selected
    },
    selectedClass (index) {
      if (this.isSelected(index)) {
        return 'selected'
      } else {
        return ''
      }
    }
  },
  components: {
    scrollbar,
    revCard
  }
})
</script>