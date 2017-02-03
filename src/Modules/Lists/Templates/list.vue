<style lang="scss">
  .list{
    padding: 0px;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
    a.btn{
      font-size: 1.2em;
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
    content: url('../../../assets/close.png');
    display: block;
    float:right;
  }
  .list.parent>li>a:hover:after, .list.child>li>a.hasChild:hover:after{
    content: url('../../../assets/close-red.png');
    display: block;
    float:right;
  }
  .list.parent>li>a.open, .list.child>li>a.hasChild.open{
    color: #e3001b;
  }
  .list.parent>li>a.open:after, .list.child>li>a.hasChild.open:after{
    content: url('../../../assets/open-red.png');
    display: block;
    float:right;
  }
  .list.parent>li>a.open:hover:after, .list.child>li>a.hasChild.open:hover:after{
    content: url('../../../assets/open-red.png');
    display: block;
    float:right;
  }
  .list.sublist li .btn{
    font-size: 1.1em;
    padding-left:2em;
    background: none;
  }
  .list.sublist li .list.sublist li a.btn{
    padding-left:2.5em;
    font-size: 1em;
    border-top: none; border-bottom: none;
  }  
  .list.sublist li .list.sublist li .list.sublist li a.btn{
    padding-left:3em;
    font-size: 0.9em;
  }

  .expand-enter-active, .expand-leave-active {
    transition: all 0.5s ease;
    max-height: 3000px;
    overflow: hidden;
  }
  .expand-enter{
    transition: all 0.5s  ease;
    max-height: 0px;
    // opacity: 0;
  }
  .expand-leave-active {
    transition: max-height 1s  ease;
    max-height: 0px;
    // padding: 0 10px;
    // opacity: 0;
  }
  .sidebar_invisible {
    display:none;
    height: 0px !important;
  }
  .sidebar_visible {
    display:block;
  }
</style>

<template>
<!-- :style="sublistHeight"  -->
<!-- @on.load="elementCharge()" -->
  <ul class="list" :class="classNode" >
    <li v-for="(item, index) in list"> 
      <router-link 
        v-if="hasSlug(item)"
        @click.native="toogle(index)"
        class="btn"
        :class="getHasChildrenClass(index)+' '+etat(index)"
        :to="getLink(item.id, item.slug)">
        {{item.name}} 
      </router-link>  
      <list 
          v-if="isVisible(index)"
          transition="expand"
          :name="name"
          :open="getOpen(index)"
          :items="items[index].children" 
          :path="path"
          :child="true"
          class="sublist">     
      </list> 
    </li> 
    

  </ul>
</template>

<script>
  import _ from 'lodash'
  // import $ from 'jquery'
  // import test from 'jquery-ui'

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
        active: true,
        list: {},
        childHeight: 0
        // open: []
      }
    },
    mounted () {
      this.list = _.cloneDeep(this.items)
    },
    computed: {
      classNode () {
        if (this.child) {
          return 'child'
        } else {
          return 'parent'
        }
      }
    },
    methods: {
      hasSlug (item) {
        if (item.slug === '') {
          return false
        } else { return true }
      },
      isVisible (index) {
        if (this.getOpen(index)) {
          return this.getOpen(index)
        } else {
          return this.items[index].children && this.isOpen(index)
        }
      },
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
        this.list.splice(index, 1, item)
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
      getOpen (index) {
        if (typeof this.list[index].open === 'undefined') {
          return false
        } else {
          return this.list[index].open
        }
      },
      isOpen (index) {
        var result = false
        if (typeof this.path !== 'undefined') {
          this.path.forEach((value) => {
            if (value.id === this.list[index].id) {
              result = true
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