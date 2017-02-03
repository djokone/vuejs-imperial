<style lang='scss'>
  #post{
    h1{
      margin-bottom: 0.5em
    }
    img{
      padding: 10px;
    }
    .alignleft{
      float:left;
      margin-right:6px;
    }
    .alignright{
      float:right;
      margin-left:6px;
    }
    .alignright::after, .alignleft::after{
      clear: both;
    }
    a{
     color: #e3001b;
    }
    p{
      margin-bottom: 0.5em;
    }
  }
</style>

<template>
  <div id="post">
    <h1>{{post.name}}</h1>
    <div v-html="contenu"></div>
  </div> 
</template>

<script>
  import config from 'src/bootstrap'

  export default ({
    props: {
      post: {
        type: Object
      }
    },
    computed: {
      // contenu () {
      //   let content = this.content.replace()
      //   return content
      // },
      contenu () {
        // get () {
        //   return this.post.content
        // },
        // set () {
        // console.log('test')
        // let imgs = this.$el.getElementsByTagName('img')
        let html = this.post.content.replace(/(src=")([a-z/0-9_\-.]*)(")/ig, '$1' + config.images + '$2$3')
        return html
      //   }
      }
    }
  })

</script>