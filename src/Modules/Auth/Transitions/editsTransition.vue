<style lang="scss">
  h1::first-letter{
    text-transform: uppercase;
  }

</style>

<template>
<div id="editAll" v-if="isLoaded">
  <h1>édition du compte</h1>

  <edit-photo 
    :data="user"
  ></edit-photo>
  <edit-user 
    :data='userUpdate'
    :errors="errors.user"
  ></edit-user>
  <edit-profil 
    :data="userUpdate" 
    :errors="errors" 
    :new="isNew(userUpdate.profil)"
  ></edit-profil>
  <edit-society 
    :data="userUpdate" 
    :errors="errors"
     ></edit-society>
 <!--  <edit-website :data="user.website" ></edit-website> -->
  <a @click="send" class="submit">Valider et continuer ...</a>
</div>
</template>

<script>
  import editPhoto from '../Templates/editPhoto'
  import editProfil from '../Templates/editProfil'
  import editSociety from '../Templates/editSociety'
  import editWebsite from '../Templates/editWebsite'
  import editUser from '../Templates/editUser'
  import { mapActions, mapGetters } from 'vuex'
  import _ from 'lodash'

  export default ({
    name: 'EditsTransition',
    data () {
      return {
        userUpdate: {
        },
        ok: false
      }
    },
    mounted () {
      this.userUpdate = _.cloneDeep(this.user)
      // if (this.userUpdate.profil === 'undefined') {}
      this.ok = true
    },
    methods: {
      ...mapActions({
        saveProfil: 'saveProfil',
        setFlash: 'setFlash'
      }),
      changeProfil (val) {
        this.userUpdate.profil = val
      },
      send () {
        this.saveProfil({data: this.userUpdate, id: this.user.id}).then((response) => {
          if (response.success) {
            this.setFlash({message: 'Vos information on bien été mis a jour !'})
            // window.location.reload()
          } else {
            console.log(response)
            this.setFlash({
              message: 'Une erreurs c\'est glissé ...',
              type: 'error'
            })
            // console.log('isError')
            // this.errors = response.data.errors
          }
        })
      },
      isNew (item) {
        return typeof item === 'undefined'
      }
    },
    computed: {
      ...mapGetters({
        user: 'user',
        isLoaded: 'isAuthLoaded',
        errors: 'errors'
      }),
      dataIsLoaded () {
        return !_.isEmpty(this.userUpdate)
      }
    },
    watch: {
      user: {
        handler (val, oldVal) {
          this.userUpdate = _.cloneDeep(val)
          this.ok = true
          // if (!this.userUpdate.company.siege) {
          //   this.userUpdate.company.siege = {
          //     adresse: '',
          //     ville: '',
          //     postal: '',
          //     fix: ''
          //   }
          // }
        }
        // deep: true
      }
    },
    components: {
      editProfil,
      editPhoto,
      editSociety,
      editWebsite,
      editUser
    }
  })
</script>