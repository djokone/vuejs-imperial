<style>
  @import "~malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css";
  .mCSB_inside > .mCSB_container {
    margin-right: 0px; 
  }
  .mCSB_draggerRail{
    background:red;
  }
  .mCSB_dragger{
    background: #e3001b;
    z-index: 10;
  }
  .mCSB_dragger_bar{
    background: #e3001b;
  }
  ._mCS_1 .mCSB_dragger .mCSB_dragger_bar{ 
    background-color: #e3001b; 
    width: 20px;
    border-radius: 0px;
  }
  ._mCS_1 .mCSB_dragger .mCSB_dragger_bar:hover{ 
    background-color: #e3001b; 
    width: 20px;
    border-radius: 0px;
  }
  .mCSB_scrollTools{ /* contains scrollbar markup (draggable element, dragger rail, buttons etc.) */
    position: absolute;
    width: 30px;
    height: auto;
    left: auto;
    top: 0;
    right: 0;
    bottom: 0;
  }

  /*#mCSB_3_dragger_vertical .mCSB_dragger_bar{ background-color: blue; }*/

  #mCSB_1_scrollbar_vertical .mCSB_dragger{ height: 100px; }

  #mCSB_1_scrollbar_horizontal .mCSB_dragger{ width: 100px; }

  .mCSB_1_scrollbar .mCSB_dragger .mCSB_draggerRail{ 
    width: 30px; background-color: #e3001b; 
  }

  .mCSB_container_wrapper{

    position: absolute;
    height: auto;
    width: auto;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .mCSB_scrollTools .mCSB_draggerRail{
    border-radius: 0px;
    background-color: #000; background-color: rgba(0,0,0,1);
    width: 100%;
    /*filter: "alpha(opacity=40)"; -ms-filter: "alpha(opacity=40)"; */
  }
  .mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar{
    background-color: #fff; background-color: #e3001b;
    /*filter: "alpha(opacity=85)"; -ms-filter: "alpha(opacity=85)"; */
  }
  .mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar{
    background-color: #fff; background-color: #e3001b;
    /*filter: "alpha(opacity=85)"; -ms-filter: "alpha(opacity=85)"; */
  }
  .mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
  .mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar{
    background-color: #e3001b;
    /*background-color: #fff; background-color: rgba(255,255,255,0.9);
    filter: "alpha(opacity=90)"; -ms-filter: "alpha(opacity=90)";*/ 
  }
</style>

<template>
  <div class="scroll">
    <slot></slot>
  </div>
<!-- <slot>
</slot> -->
</template>

<script>
  import $ from 'jquery'
  import 'jquery-mousewheel'
  import 'malihu-custom-scrollbar-plugin'

  export default ({
    mounted () {
      $('.scroll').mCustomScrollbar()
    },
    methods: {
      scrollto (index) {
        let target = '#' + index
        $('.scroll').mCustomScrollbar('scrollTo', target)
      }
    }
  })
</script>