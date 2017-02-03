<style lang="scss">
  .slide-left {
  transform: translateX(100px);
  transition: all .3s ease;
  }
  .slide-right {
    transform: translateX(100px);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  // .slide-fade-enter, .slide-fade-leave-active {
  //   transform: translateX(10px);
  //   opacity: 0;
  // }
</style>
<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  /*//////////////////////////////////////
  * Website.vue
  * @parametre : le parametre
  */////////////////////////////////////*/
  
  // #content {
  //   margin-top: 59px;
  //   @include transform(translateX(0))
  //   @include transition(all 0.5s ease-in-out);
  //   @include span-columns(6 of 12);
  //   float: right;
  //   @include media(max-width 930px , 12) {
  //     @include span-columns(6)
  //   }
  // }

  // #content.open {
    
  //   @include media(max-width 930px , 12) {
  //       @include transform(translateX(80%))
  //   }
  // }
  // #content.close {
  //   @include media(max-width 930px , 12) {
  //       @include transform(translateX(0))
  //   } 
  // }

  #content{
    margin-top: 59px;
    @include span-columns(8 of 12)
    @include media(max-width 680px) {
      @include span-columns(12 of 12)
    }
  }

</style>

<template>
  <div id="__website">
    
    <topNav @switch="toogleSwitch"></topNav >
    <menuForResponsive :isOpen="open">
      <menuList @close="toogleSwitch">
      </menuList>
    </menuForResponsive>
    <div id="body">
      <sidbar>
      </sidbar>
      <notifications></notifications>
      <div id="content">
        <transition :name="transitionName">
          <router-view>
          </router-view>
        </transition>
      </div>
      
    </div>
    <appFooter></appFooter>
  </div>
</template>

<script>
  import sidbar from 'src/Modules/Sidbar/Templates/sidbar'
  import topNav from 'src/Modules/Header/Templates/topNav'
  import notifications from 'src/Modules/Notifs/Templates/notifications'
  import appFooter from 'src/Modules/Footer/Templates/footer'
  import menuForResponsive from 'src/Modules/Header/Templates/menu_for_responsive'
  import menuList from 'src/Modules/Header/Templates/menu_list'

  export default {
    name: 'website',
    data () {
      return {
        open: false,
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },
    methods: {
      toogleSwitch () {
        this.open = !this.open
      }
    },
    components: {
      sidbar,
      topNav,
      notifications,
      appFooter,
      menuList,
      menuForResponsive
    }
  }
</script>