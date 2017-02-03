<style lang="scss"> 
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat"; 
  // .img {
  //   padding:15px;
  //   width:100%;
  //   display: flex;
  //   img{
  //     margin:auto;
  //   }
  // }
  
  .img{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    // @include flex-direction(center)
    // @include display(flex);
    img, canevas {
      align-self: center;
      margin: auto;
    }
    img.isLoaded{
      opacity: 1; 
      @include transition(opacity 0.5s ease-in-out);
    }
    img.loaded{
      opacity: 0;
      @include transition(opacity 0.5s ease-in-out);
    }
  }
  // img.verticalCenter{
  //   @include transform(translateY(50%));
  //   position: absolute;
  // }
  .img canevas{
    width:100%;
  }
  .img.paysage {
    img, canvas{
      height: auto !important;
      width: 100% !important;
    }
  }  
  .img.portrait:not(.crop) {
    img, canvas{
      width: auto !important;
      height: 100% !important;
    }
  }
  .crop{
    position: relative;
    overflow: hidden;

    img{
      width: 100%;
      //  align-self: flex-end;
      // //position: absolute;
      // // position: absolute;
      // height: auto !important;
      // // @include transform(translateY(-50%));
      // margin:auto;
    }
  }
  div.crop.verticalCenter {
    img {
      position: absolute;
      top:-100%; left:0; right: 0; bottom:-100%;
      margin: auto;      
    }
  }
</style>

<template>
  <div :class="classParent" :style="styleParent">
      <img 
        v-if="mode === 'inset'"
        :class="classes"
        :src="link"
        @load='onload' 
        :style="contraintes">
      <img 
        v-if="mode === 'crop'"
        @load="onload"
        :class="classes"
        :style="cropValue"
        :src="link">
  </div>
</template>

<script>
var imageLoad = require('blueimp-load-image-npm')
import bootstrap from 'src/bootstrap'

export default ({
  props: {
    mode: {
      default: 'inset',
      type: String
    },
    unity: {
      default: 'px',
      type: String
    },
    height: {
      type: [Number, Object],
      required: true
    },
    width: {
      type: [Number, Object],
      required: true
    },
    max: {
      type: Object
    },
    src: {
    }
  },
  data () {
    return {
      loading: true,
      orientation: null,
      img: {},
      dynWidth: '',
      dynHeight: '',
      verticalCenter: false,
      over: false
    }
  },
  watch: {
    src (value) {
      // this.appendImg()
    }
  },
  computed: {
    h () {
      if (typeof this.height === 'number') {
        return this.height
      }
      if (typeof this.height === 'object') {
        return this.height.val
      }
    },
    w () {
      if (typeof this.width === 'number') {
        return this.width
      }
      if (typeof this.width === 'object') {
        return this.width.val
      }
    },
    heightFormat () {
      if (typeof this.height === 'number') {
        return this.height + this.unity
      }
      if (typeof this.height === 'object') {
        return this.height.val + this.height.unity
      }
    },
    widthFormat () {
      if (typeof this.width === 'number') {
        return this.width + this.unity
      }
      if (typeof this.width === 'object') {
        return this.width.val + this.width.unity
      }
    },
    styleParent () {
      let style = {}
      if (this.mode === 'crop') {
        if (this.loading) {
          style.height = this.heightFormat
        }
        style.maxHeight = this.heightFormat
        if (this.over) {
          style.height = this.heightFormat
        }
        if (!this.verticalCenter) {
          // style.height = this.heightFormat
        }
        style.width = this.widthFormat
      } else {
        style.minHeight = this.heightFormat
      }
      return style
    },
    classParent () {
      let classes = 'img ' + this.orientation

      if (this.mode === 'crop') {
        classes += ' crop'
        if (this.img.height > this.h) {
          // classes += ' verticalCenter'
          this.verticalCenter = true
        }
      }
      return classes
    },
    classes () {
      let classes = []
      if (this.loading) {
        classes.push('loaded')
      } else {
        classes.push('isLoaded')
      }
      if (this.over) {
        classes.push('verticalCenter')
      }
      return classes
    },
    cropValue () {
      let style = {}
      if (this.over) {
        let margin = (this.height - this.dynHeight) / 2
        style.marginTop = margin + 'px'
      }
      return style
    },
    contraintes () {
      let style = {}
      if (this.orientation === 'portrait') {
        style.maxHeight = this.heightFormat
      } else {
        style.maxWidth = this.widthFormat
      }
      // if (typeof this.max !== 'undefined') {
      //   style = this.max
      // }
      return style
    },
    link () {
      if (this.src) {
        return bootstrap.images + this.src
      } else {
        return 'http://www.hoteltrafficbuilders.com/wp-content/themes/htb-theme/images/noimage.jpg'
      }
    }
  },
  methods: {
    onload (e) {
      let img = e.target
      this.img.width = img.offsetWidth
      this.img.height = img.offsetHeight
      this.orientation = this.orient()
      this.loading = false
      this.onResize()
      if (this.mode === 'crop') {
        window.addEventListener('resize', this.onResize)
      }
      if (this.mode === 'inset' && this.orientation === 'paysage') {
        window.addEventListener('resize', this.onResize)
      }
    },
    onResize: function (event) {
      let img = this.$el.getElementsByTagName('img')[0]
      this.dynHeight = img.offsetHeight
      let limit = img.offsetHeight
      if (limit > this.height) {
        this.over = true
      } else {
        this.over = false
      }
    },
    orient () {
      if (this.img.width <= this.img.height) {
        return 'portrait'
      } else {
        return 'paysage'
      }
    },
    appendImg () {
      if (this.src) {
        let obj = this
        let file = this.link
        imageLoad(
          file,
          function (img) {
            obj.img = img
            obj.orientation = obj.orient()
            if (img.type === 'error') {
              console.log('Erreur du chargement du fichier :' + file)
            } else {
              let toRemove = obj.$el.children[0]
              if (typeof toRemove !== 'undefined') {
                obj.$el.removeChild(toRemove)
              }
              // console.log(img)
              img.style.maxHeight = 'test'
              img.width = false
              img.height = false
              // obj.$el.removeChild()
              obj.$el.appendChild(img)
            }
          },
          {
            maxWidth: false,
            maxHeight: false,
            canvas: false
          }
        )
      }
    }
  },
  mounted () {
    // let that = this
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize)
  }
})
</script>