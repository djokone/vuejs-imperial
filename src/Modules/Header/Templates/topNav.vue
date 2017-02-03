<template>
  <div id="top" :class="isBlured">
    <div class="header big">
      <div class="logo">
        <img src="../../../assets/Imperial-International.png" alt="">
      </div>
      <firstbar>
      </firstbar>
      <secondbar >
      </secondbar>
    </div>
    <smallBar @switch="switchToogle"></smallBar>
    <div class="advance">
      <search :entity="1"></search>
    </div>
  </div>
</template>

<script>
  /* global IntersectionObserver */
  import firstbar from './firstbar'
  import secondbar from './secondbar'
  import smallBar from './smallBar'
  import search from 'src/Modules/Research/Templates/search'
  import {
    modal
  } from 'src/Modules/Modal/Services/getters'

  export default ({
    vuex: {
      getters: {
        modal
      }
    },
    data () {
      return {
        observer: false
      }
    },
    computed: {
      isBlured () {
        if (this.modal) {
          return 'blur'
        } else {
          return 'noBlur'
        }
      }
    },
    mounted () {
      // console.log(this.$el)
      let options = {
        root: this.$el
      }
      this.observer = new IntersectionObserver(this.callback, options)
      let items = this.$el.querySelectorAll('.menu_item')
      items.forEach((item) => {
        this.observer.observe(item)
      })
      this.observer.observe(this.$el.querySelector('.big_menu'))
    },
    methods: {
      callback () {
      },
      switchToogle () {
        this.$emit('switch')
      }
    },
    components: {
      'firstbar': firstbar,
      secondbar,
      search,
      smallBar
    }
  })
</script>