<style lang="scss">
  .dropzone{
    margin: 30px 0px; 
    border: 3px dashed #dedede;
    height: 200px;
    width: 100%;
    padding: 20px;
    cursor: pointer;
    &.dz-drag-hover{
      border-color: #e3001b;
      .dz-message{
        color: #e3001b;
      }
    }
    .dz-message {
      text-align: center;
      font-family: 'Montserrat';
      color: #dedede;
    }
  }
</style>

<template>
  <div class="media_dropzone">
  <form 
    action=""
    class="dropzone"
    id="imgProfil"
    >
    <div class="fallback">
      <input type="file" name="file">
    </div>
  </form>
  </div>
</template>

<script>
  import Dropzone from 'dropzone'
  import bootstrap from 'src/bootstrap'
  import auth from 'src/authConfig'
  
  export default ({
    props: {
      reference: {
        type: String
      },
      message: {
        default: 'Glissez votre fichier ou cliquez ici ...',
        type: String
      },
      refid: {
        type: Number
      }
    },
    mounted () {
      this.dropzone = new Dropzone('#imgProfil', {
        url: bootstrap.serveur + '/api/media/upload/' + this.reference.toLowerCase() + '/' + this.refid + '.json',
        headers: { 'Authorization': 'Bearer ' + auth.getToken() },
        previewsContainer: false,
        dictDefaultMessage: this.message
      })
      this.dropzone.on('success', (file, response) => {
        this.$emit('uploadsuccess', response)
        // console.log(file)
        // console.log(response)
      })
    }
  })
</script>