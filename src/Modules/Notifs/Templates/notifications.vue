<style lang="scss">
  #allNotification{
    position: fixed;
    right: 20px;
    z-index: 20;
  }
</style>

<template>
<div id="allNotification">
  <notif
    v-for="notif in notifs"
    :message="notif.message"
    :types="notif.type"
    >
  </notif>
  
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import notif from './notif'
  
  export default {
    name: 'allNotification',
    computed: {
      ...mapGetters({
        notifs: 'allNotifs'
      })
    },
    components: {
      notif
    }
  }
</script>