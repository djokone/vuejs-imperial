<style>
</style>

<template>
  <li>
      <router-link @click="toogle()" class="btn" :class="getHasChildrenClass()+' '+etat()" :to="{name: 'categorieshow' , params: { slug: slug , id: id}}">
        {{name}}
      </router-link>   
  </li>
  
</template>

<script>
  import list from './list'

  export default ({
    name: 'items',
    props: {
      name: {
        type: String
      },
      slug: {
        type: String
      },
      id: {
        type: Number
      },
      children: {
        type: Array
      }
    },
    data () {
      return {
        open: false
      }
    },
    methods: {
      toogle () {
        this.open = !this.open
      },
      getHasChildrenClass () {
        if (this.children) {
          return 'hasChild'
        } else {
          return 'noChild'
        }
      },
      etat () {
        if (this.open) {
          return 'open'
        } else {
          return 'close'
        }
      }
    },
    components: {
      list
    }
  })
</script>