<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat"; 

  #categories_list{
    @include fill-parent();
    // margin-top: 20px;
  }
  
  .categorycard {
    // @include span-columns(6 of 12)
    // @include omega(2n)
    @include media(1500px , 12) {
      @include span-columns(4);
      @include omega(3n);
    }
    @include media(min-width 1000px max-width 1500px , 12) {
      @include span-columns(6);
      @include omega(2n);
    }
    @include media(min-width 780px max-width 1000px , 12) {
      @include span-columns(6);
      @include omega(2n);
    }
    @include media(min-width 0px max-width 780px , 12) {
      @include span-columns(12);
      @include omega;
    }
    //  height: 30px;
  }
</style>

<template>
  <div id="categories_list">
    <card 
    v-for="(item, index) in items"
    :classes="'categorycard'"
    :h3="item.name"
    :link="getLink(index)"
    class="category_item">
      <thumb
        :mode="'crop'" 
        :src="thumb(index)"
        :width="{width: {value: 100, unity: '%'}}"
        :height="150"
      >
        
      </thumb>
    </card>
  </div>
</template>

<script>
  import {isEmpty} from 'lodash'
  import card from 'src/Modules/Cards/Templates/card'
  import thumb from 'src/Modules/Medias/Templates/thumb'
  export default ({
    props: {
      items: {
        // type: [Array, Object]
      }
    },
    computed: {
    },
    methods: {
      getLink (index) {
        let item = this.items[index]
        return {
          name: 'categorieshow',
          params: {
            id: item.id,
            slug: item.slug
          }
        }
      },
      thumb (index) {
        if (!isEmpty(this.items[index].thumb)) {
          return this.items[index].thumb.file
        } else {
          return ''
        }
      }
    },
    components: {
      card,
      thumb
    }
  })
</script>