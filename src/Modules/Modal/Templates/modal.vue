<style lang="scss">
  #modal{
    position: fixed;
    top: 0; bottom: 0; left: 0; right:0;
    z-index: 100;
    background: rgba(0,0,0,0.5);
    cursor: pointer;
    #container{
      cursor: default; 
      z-index: 101;
      position:absolute;
      background: white;
      box-shadow: 0px 6px 20px 11px rgba(0, 0, 0, 0.2);
      padding:10px;
    }
    #container.big{
      top: 15%; bottom: 10%; left: 20%; right: 20%;
    }
  }
</style>

<template>
  <div id="modal" class="background" @click="close">
    <div id="container" @click.stop class="big">
      <h3>{{title}}</h3>
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
import {
  toogleModal
} from '../Services/actions'
import {
  modal
} from '../Services/getters'

export default ({
  props: {
    title: {
      type: String
    }
  },
  vuex: {
    actions: {
      toogleModal
    },
    getters: {
      modal
    }
  },
  methods: {
    close () {
      this.toogleModal('close')
    }
  },
  mounted () {
    if (!this.modal) {
    }
    this.toogleModal('open')
  },
  beforeDestroy () {
    this.toogleModal('close', false)
  }
})
</script>