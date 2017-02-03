<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  // body{
  //   background: red;
  // }
  #search1{
    text-align: center;
    font-weight: bold;
    font-size: 1.4em;
  }
  .search{
    height:100%;
    @include media(max-width 945px) {
      display:none;
    } 
    form{
      height:100%;
    }
    input{
      color:white;
      font-family: 'Montserrat', sans-serif;
      padding: 15px;
      border:none;
      background: #ef6979;
      width:100%;
      height:100%;
    }
  }
</style>

<template>
  <div class="search" v-show="active" >
      <input type="text" v-model="term" @keydown="search" :id="'search'+entity" @focusout="out">
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default({
    props: {
      entity: {
      }
    },
    data () {
      return {
        entityActive: 0,
        // term: '',
        onSearch: false,
        referer: ''
      }
    },
    created () {
      // let that = this
      // this.$router.afterEach((transition) => {
      //   if (transition.from.name !== 'search') {
      //     that.referer = transition.from.path
      //   }
      //   if (transition.to.name !== 'search' && !that.isEmpty) {
      //     that.update('')
      //   }
      // })
    },
    mounted () {
    },
    methods: {
      ...mapActions({
        update: 'updateTerm'
      }),
      out () {
        this.onSearch = false
      },
      search () {
        this.onSearch = true
      },
      redirect () {
        if (!this.isEmpty) {
          if (this.$route.name !== 'search' && this.onSearch) {
            this.$router.push({name: 'search'})
          }
          //
        } else {
          // console.log('lol')
          if (this.$route.name === 'search') {
            this.$router.push(this.referer)
          }
        }
      },
      focus () {
        if (this.entity === this.entityActive) {
          // let element = this.$el.getElementById('search' + this.entity)
          // this.$el.querySelector('#search' + this.entity)
          this.$nextTick(() => {
            let el = this.$el.querySelector('#search' + this.entity)
            el.focus()
          })
          // console.log(this.$el.$nextTick)
          // element.focus()
          // this.$el.querySelector('input')[0].focus()
          // element.focus()
          // console.log(this.$el.querySelector('input'))
          // this.$el.querySelector('#search' + this.entity)
        }
      }
    },
    computed: {
      ...mapGetters({
        storeTerm: 'term',
        products: 'searchProducts'
      }),
      term: {
        get () {
          return this.storeTerm
        },
        set (value) {
          this.update(value)
        }
      },
      letters () {
        return this.term.length
      },
      isEmpty () {
        if (this.term.length === 0) {
          // this.router.push('produits')
        } else {
          // this.router.push('search')
        }
        return this.term.length === 0
      },
      active () {
        let entity
        if (this.isEmpty) {
          entity = this.entity === 0
          this.entityActive = 0
        } else {
          entity = this.entity === 1
          this.entityActive = 1
        }
        this.redirect()
        this.focus()
        return entity
      }
    }
  })
</script>