<template>
<div class="my-form">
  <form action="" v-if="!hasForm" @submit.prevent="send()">
    <div class="my-forms" v-for="(input, index) in inputs">
      <my-input
        v-if="!hasFormInput(input)"
        :keys="index"
        :type="getType(input)"
        :label="getLabel(input)"
        :value="getValue(input)"
        @changevalue="updateInput"
        :errors="getErrors(getName(input))"
        :placeholder="getPlaceholder(input)"
        :name="getName(input)"
      >
      </my-input>
      <my-form
        v-if="hasFormInput(input)"
        :inputs="input.form"
        :is-child="true"
        :name="input.name"
        :datas="getChildData(input.name)"
        :errors="getErrors(getName(input))"
        @output="changeChild"
        >
      </my-form>
    </div>
    

    <button v-if="submit">
      {{submitvalue}}
    </button>
  </form>
</div>
</template>

<script>
  import myInput from './input'
  import _ from 'lodash'

  export default ({
    name: 'myForm',
    data () {
      return {
        localData: {}
      }
    },
    props: {
      isChild: {
        default: false
      },
      submit: {
        default: false
      },
      datas: {
        default: function () {
          return {}
        }
      },
      name: {
        default: ''
      },
      inputs: {
        type: [Array, Object],
        default: {}
      },
      forms: {
        type: [Array, Object],
        default: function () {
          return []
        }
      },
      errors: {
        type: [Array, Object, Boolean],
        default: false
      }
    },
    computed: {
      hasForm () {
        if (_.isEmpty(this.forms)) {
          return false
        } else {
          return true
        }
      },
      hasName () {
        return this.name !== ''
      },
      isNew () {
        return _.isEmpty(this.datas)
      },
      submitvalue () {
        if (this.submit) {
          if (typeof this.submit.value !== 'undefined') {
            return this.submit.value
          } else {
            if (typeof this.submit === 'string') {
              return this.submit
            }
            return 'Envoyer'
          }
        } else {
          return false
        }
      }
    },
    methods: {
      send () {
        this.$emit('send', this.localData)
      },
      changeChild (data, name) {
        this.localData[name] = data
        this.$emit('output', this.localData)
      },
      getChildData (name) {
        return this.localData[name]
      },
      updateInput (val, keys, name) {
        // this.inputs[keys].value = val
        // if (this.hasName) {
        //   if (_.isEmpty(this.localData[this.name])) this.localData[this.name] = {}
        //   this.localData[this.name][name] = val
        // } else {
        this.localData[name] = val
        // }
        if (this.isChild) {
          this.$emit('output', this.localData, this.name)
        } else {
          this.$emit('output', this.localData)
        }
      },
      hasFormInput (input) {
        return typeof input.form !== 'undefined'
      },
      getName (input) {
        return input.name
      },
      getLabel (input) {
        if (typeof input.label === 'undefined') {
          return input.name
        } else {
          return input.label
        }
      },
      getType (input) {
        if (typeof input.type !== 'undefined') {
          return input.type
        } else {
          return 'text'
        }
      },
      getInput () {
        if (this.hasForm) {
          return this.forms
        } else {
          return this.inputs
        }
      },
      getValue (input) {
        if (typeof input.value === 'undefined' && !_.isEmpty(this.datas)) {
          if (!_.isEmpty(this.datas)) {
            if (!_.isEmpty(input.form)) {
              return this.datas[input.name]
            }
            if (this.hasName) {
              return this.datas[input.name]
            }
            if (typeof this.datas[input.name] !== 'undefined') {
              return this.datas[input.name]
            }
          }
          return ''
        }
        return input.value
      },
      getPlaceholder (input) {
        if (typeof input.placeholder === 'undefined') {
          return input.name
        } else {
          return input.placeholder
        }
      },
      getErrors (name) {
        if (this.errors && typeof this.errors[name] !== 'undefined') {
          // if (this.hasName) {
          //   return this.errors[this.name][name]
          // }
          return this.errors[name]
        }
      }
    },
    created () {
      if (!_.isEmpty(this.datas)) {
        this.localData = _.cloneDeep(this.datas)
      }
    },
    watch: {
      datas (val) {
        if (!_.isEmpty(val)) {
          if (this.hasName) {
            // this.localData[this.name] = this.datas
            this.localData = this.datas
          } else {
            this.localData = this.datas
          }
        } else {
          return {}
        }
      }
    },
    components: {
      myInput
    }
  })
</script>