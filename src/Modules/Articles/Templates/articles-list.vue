<style lang="scss">
  #articles{
    h1{
      margin-bottom: 12px;
    }
    .article{
      position: relative;
      margin-bottom: 12px;
      border: 1px #dedede solid;
      padding:10px;
      h2{
        margin-bottom: 0.5em;
      }
      p{
        margin-bottom: 40px;
      }
      .date{
        background: #dedede;
        font-family: 'Montserrat', sans-serif;
        border: 1px #dedede solid;
        color: grey;
        text-decoration: none;
        position: absolute;
        padding: 5px 10px;
        // background: #f9f9f9;
        bottom:-1px;right:-1px;
      }
      .next{
        font-family: 'Montserrat', sans-serif;
        border: 1px #dedede solid;
        color: grey;
        text-decoration: none;
        position: absolute;
        padding: 5px 10px;
        // background: #f9f9f9;
        bottom:-1px;left:-1px;
      }
      .next:hover{
        color: #e3001b;
        background: white;
      }
    }

  }
</style>

<template> 
  <div id="articles">
    <h1>Articles</h1>
    <router-link class="article" tag="div" v-for="post in posts" :to="{name: 'article', params: {id: post.id, slug: post.slug}}" >
      <h2>{{post.name}}</h2>
      <p>
        {{post.extrait}}
      </p>
      <router-link :to="{name: 'article', params: {id: post.id, slug: post.slug}}"></router-link>
      <router-link :to="{name: 'article', params: {id: post.id, slug: post.slug}}" class="next">Lire la suite</router-link>
      <span class="date">Publié le {{transformDate(post.created)}}<span>
    </div>
  </router-link>
</template>

<script>
  import moment from 'moment'
  
  export default({
    props: {
      posts: {
        type: Array
      }
    },
    methods: {
      transformDate (date) {
        if (typeof date !== undefined) {
          moment.locale('fr')
          // let now = moment(date).fromNow()
          let now = moment(date).format('LL')
          return now
        }
      }
    }
  })
</script>