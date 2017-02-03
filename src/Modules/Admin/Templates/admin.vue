<style lang="scss">
#admin{
  #body{
    display:block;
    position: relative;
    padding: 20px;
    margin-left: 120px;
  }
  #body.__got_option{
    margin-left: 240px;
  }
}
</style>
<style lang="scss">
  .titre{
    font-size: 2em;
  }
  .sous-titre{
    font-size: 2.5em;
  }
  .input{
    width: 100%;
    padding: 0.5em 0em;
    input{
      width: 100%;
      padding: 0.5em 1em;
      font-family: 'clarkelight';
      font-size: 1.3em;
    }
    label{
      display: block;
      font-family: 'clarkeblack';
      font-size: 1.8em;
      margin-bottom: 10px;
    }
  }
</style>

<template>
  <div id="admin">
    <navbar></navbar>
    <router-view name="options"></router-view>
    <div id="body" :class="optionClass">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import navbar from '../../Sidbar/Templates/adminNav'
  import { mapGetters } from 'vuex'
  Object.size = function (obj) {
    let size = 0
    let key
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++
    }
    return size
  }

  export default {
    name: 'Admin',
    components: {
      navbar
    },
    data () {
      return {
        hasOption: 0
      }
    },
    mounted () {
      this.hasOptions()
    },
    watch: {
      '$route': 'hasOptions'
    },
    methods: {
      hasOptions () {
        let sidbar = this.$route.matched[1].components.valueOf()
        let length = Object.size(sidbar)
        this.hasOption = length
        return length
      }
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged'
      }),
      optionClass () {
        if (this.hasOption === 2) {
          return '__got_option'
        }
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        if (!vm.isLogged) {
          next('/login')
        }
      })
    }
  }
</script>