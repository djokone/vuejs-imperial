<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat"; 
  #photo_profil{
    padding: 20px 0px 40px 0px;
    .medias{
      margin-top: 20px;
      @include clearfix;
    }
    .mythumb{
      @include span-columns(4);
      @include omega(3n);
      
    }
    .action {
      .del .pict{
        height: 27px;
        width: 24px;
        background: url(../../../assets/delete.png) bottom;
        background-size:100%
      }
      .thumb .pict{
        height: 24px;
        width: 24px;
        background: url(../../../assets/thumb.png) bottom;
        background-size:100%
      }
    }
  }
</style>

<template>
  <div id="photo_profil">
    <h2>Votre photo de profil</h2>
    
    <div class="medias">
      <div class="mythumb card" v-for="media in data.media">
        <thumb 
          :src="media.file" 
          :width="150" 
          :height="150" >
            
        </thumb>
        <ul class="actions">
          <li>
            <a href="#" @click="changeThumb({mediaId: media.id, userId: data.id})" class="action thumb" :class="thumbActive(media.id)" ><div class="pict"></div></a>
          </li>
          <li>
            <a href="#" @click="supprimer(media.id)" class="action del" ><div class="pict"></div></a></li>
        </ul>
      </div>
    </div>
    <dropzone 
      :reference="'Users'" 
      :refid="data.id"
      @uploadsuccess="success"
      >
    </dropzone>
  </div>
</template>

<script>
  import dropzone from 'src/Modules/Dropzone/Templates/dropzone'
  import thumb from 'src/Modules/Medias/Templates/thumb'

  import { mapActions } from 'vuex'

  export default ({
    props: {
      data: {
        type: [Object, Array]
      }
    },
    methods: {
      ...mapActions({
        addImg: 'addImg',
        delImg: 'delImg',
        changeThumb: 'changeThumb'
      }),
      success (response) {
        this.addImg(response)
        this.$off('uploadSuccess')
      },
      supprimer (id) {
        this.delImg(id)
      },
      thumbActive (id) {
        if (id === this.data.media_id) {
          return 'active'
        }
      }
    },
    components: {
      dropzone,
      thumb
    }
  })
</script>