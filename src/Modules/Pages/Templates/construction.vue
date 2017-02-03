<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";

  #construction{
    @include fill-parent();
    padding: 20px;
    .text{
      @include span-columns(6 of 9)
      p{
        font-size: 1.5em;
      }
      // float: left;
    }
    .illu{
      margin-top: -100px;
      @include shift(3)
      @include span-columns(6 of 9)
      img{
        width: 100%;
      }
      // float: right;
    }
  }
</style>

<template>
  <div id="construction">
    <div class="text">
      <h1>Cette page est actuellement <span class="red">en maintenance</span>, revenez très prochainement pour accéder au contenu ...</h1>
      <p>Nous vous prions de nous excuser pour la gène occasionnée</p>
    </div>
    <div class="illu">
      <img src="../../../assets/illu.png" alt="">
    </div>
  </div>
</template>

<script>
  export default ({
  })
</script>