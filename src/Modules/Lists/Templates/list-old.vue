<style lang="scss">
  .list{
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
    a.btn{
      margin-bottom:-1px;
      display:block;
      padding: 10px;
      border: 1px solid #dedede;
      text-decoration:none;
      color: #333;
      background: #f9f9f9;
    }
    a.btn:hover{
      color: #e3001b;
      cursor: pointer;
    }
  }
  a.hasChild:after{
    content: url('../../assets/close.png');
    display: block;
    float:right;
  }
  .list.parent>li>a:hover:after, .list.child>li>a.hasChild:hover:after{
    content: url('../../assets/close-red.png');
    display: block;
    float:right;
  }
  .list.parent>li>a.open, .list.child>li>a.hasChild.open{
    color: #e3001b;
  }
  .list.parent>li>a.open:after, .list.child>li>a.hasChild.open:after{
    content: url('../../assets/open-red.png');
    display: block;
    float:right;
  }
  .list.parent>li>a.open:hover:after, .list.child>li>a.hasChild.open:hover:after{
    content: url('../../assets/open-red.png');
    display: block;
    float:right;
  }
  .list.sublist li .btn{
    padding-left:1em;
    background: none;
  }
  .list.sublist li .list.sublist li .btn{
    padding-left:1.5em;
    border-top: none; border-bottom: none;
  }  
  .list.sublist li .list.sublist li .list.sublist li .btn{
    padding-left:2em;
  }
</style>

<template>
  <ul class="list" :class="classNode">
    <li v-for="(item, index) in list"> 
      <router-link @click="toogle(index)" class="btn" :class="getHasChildrenClass(index)+' '+etat(index)" :to="getLink(item.id, item.slug)">{{item.name}} 
      </router-link>  
      <list 
          v-if="items[index].children && isOpen(index)" 
          :name="name"
          :items="this.items[index].children" 
          :path="path" 
          :child="true" 
          class="sublist"></list> 
    </li> 
    

  </ul>
</template>

<script>
  import _ from 'lodash'

  export default ({
    name: 'list',
    props: {
      name: {
        type: String
      },
      selected: {
        type: Object
      },
      path: {
        type: Array
      },
      items: {
        type: Array
      },
      open: {
        type: Boolean,
        default: false
      },
      child: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: true
        // open: []
      }
    },
    mounted () {
    },
    computed: {
      list () {
        return this.items
      },
      classNode () {
        if (this.child) {
          return 'child'
        } else {
          return 'parent'
        }
      }
    },
    methods: {
      getLink (id, slug) {
        let rep = {}
        if (typeof this.name !== 'undefined') {
          rep.name = this.name
        }
        rep.params = {id: id, slug: slug}
        return rep
      },
      // selection (index) {
      //   this.$emit('select', index)
      // },
      toogle (index) {
        let item = this.list[index]
        // this.selection(item.id)
        if (typeof item.open === 'undefined') {
          item.open = true
        } else {
          item.open = !item.open
        }
        //  this.list.splice(index, 1, item)
      },
      hasChildren (index) {
        return !_.isEmpty(this.list[index].children)
      },
      getHasChildrenClass (index) {
        if (this.hasChildren(index)) {
          return 'hasChild'
        } else {
          return 'noChild'
        }
      },
      isOpen (index) {
        var result = false
        if (typeof this.path !== 'undefined') {
          this.path.forEach((value) => {
            if (value.id === this.list[index].id) {
              result = true
              return true
            }
          })
        }
        return result
      },
      etat (index) {
        if (this.isOpen(index)) {
          return 'open'
        } else {
          return 'close'
        }
      }
    }
  })
</script>