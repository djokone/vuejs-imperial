<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  .st0{ fill:#CCCCCC; }
  .st1{ fill:#232323; }
  .st2{ fill:#4C4C4C; }
  .st3{ fill:#9B9B9B; }
  .map_vector{
    stroke:#0D0D0D;
    stroke-width:2;
    stroke-alignment: outer;
    stroke-linejoin: round;
    path{
      @include transition(all 0.3s $ease-out-quad);
    }
    
    path:hover, path.selected{
      cursor:pointer;
      fill: #e3001b;
      @include transition(all 0.3s $ease-in-quad);
    }
  }
</style>

<script>
import regions from '../Datas/regions-path'
import _ from 'lodash'

export default ({
  name: 'map',
  props: {
    selected: {
    }
  },
  data () {
    return {
      regions: regions
    }
  },
  mounted () {
  },
  computed: {
    regionsOrdered () {
      return _.orderBy(this.regions, ['name'], ['asc'])
    }
  },
  methods: {
    change (index) {
      this.$emit('hover', index, 'map')
    },
    selectRegion (slug, index) {
      this.$router.push({name: 'revshow', params: {id: index, slug: slug}, hash: '#mapList'})
    },
    isSelected (index) {
      let selected = false
      if (typeof this.$route.params.id !== 'undefined') {
        selected = parseInt(this.$route.params.id) === index
      }
      return this.selected === index || selected
    },
    selectedClass (index) {
      if (this.isSelected(index)) {
        return 'selected'
      } else {
        return ''
      }
    }
  }
})
</script>

<template>
  <div class="map_vector">
    <svg version="1.1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 620 614">
      <g @mouseout="change(false)">
        <!-- <router-link v-for="(region, index) in regionsOrdered" :to="{ name: 'revshow' , params: { slug: region.slug , id: index}}"> -->
          <path
            v-for="(region, index) in regionsOrdered"
            tag="path"
            @mouseover="change(index)"
            v-bind:xlink:title="region.name"
            xlink:href="http://google.com"
            @click.prevent="selectRegion(region.slug, index)"
            :class="region.class + ' ' + selectedClass(index)" 
            :d="region.path"
            />
        <!-- </router-link> -->
        
      </g>
    </svg>
  </div>

</template>

