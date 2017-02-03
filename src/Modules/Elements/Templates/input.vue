<style lang="scss">
  .hasError{
    input {
      border-bottom: red 1px solid
    }
    .error {
      font-size: 0.8em;
      margin-top: -10px;
      color: red;
    }
  }
</style>

<template>
  <div class="my-input input" :class="classError">
    <label :for="name">{{label}}</label> <br>
    <input 
      v-if="isInput"
      type="type"
      v-model="localValue"
      :id="name"
      :placeholder="placeholder"
      @focus="resetErrors">
    <input 
      v-if="isPassword"
      type="type"
      v-model="localValue"
      :id="name"
      :placeholder="placeholder"
      @focus="resetErrors">
    <textarea
      v-if="isTextarea"
      v-model="localValue" 
      :type="type"
      :id="name" 
      :placeholder="placeholder" 
      @focus="resetErrors"
    ></textarea>
    <div class="error" v-if="getError">
      <p v-for="error in getError">
        {{error}}
      </p>
      
    </div>
  </div>
</template>

<script>
  // import func from 'src/lib/function'
  import _ from 'lodash'

  export default ({
    data () {
      return {
        localValue: _.cloneDeep(this.value),
        localErrors: _.cloneDeep(this.errors)
      }
    },
    props: {
      value: {
        default: ''
      },
      type: {
        default: 'text'
      },
      keys: {
        default: false
      },
      placeholder: {
        type: [String]
      },
      name: {
        type: [String]
      },
      label: {
        type: [String]
      },
      errors: {
        default: false
      }
    },
    created () {
      if (typeof this.value === 'undefined') {
        this.value = ''
      }
    },
    methods: {
      // getValue () {
      //   // console.log(this.value)
      //   return _.cloneDeep(this.value)
      // },
      resetErrors () {
        this.localErrors = false
      }
    },
    watch: {
      value (val, oldVal) {
        if (val !== oldVal) {
          this.localValue = val
        }
      },
      localValue (val) {
        this.$emit('changevalue', val, this.keys, this.name)
      },
      errors (val) {
        this.localErrors = val
      }
    },
    computed: {
      // value: {
      //   set (val, oldVal) {
      //     if (val !== oldVal) {
      //       console.log('change')
      //       this.localValue = val
      //     }
      //   }
      // },
      getValue () {
        return this.value
      },
      isPassword () {
        return this.type === 'password'
      },
      isInput () {
        return this.type === 'text'
      },
      isTextarea () {
        return this.type === 'textarea'
      },
      classError () {
        if (this.getError) {
          return 'hasError'
        }
      },
      mylabel () {
        if (this.label) {
          return this.label
        } else {
          return this.name
        }
      },
      // type () {
      //   return typeof this.value
      // },
      getError () {
        if (!_.isEmpty(this.localErrors)) {
          return this.localErrors
        } else {
          return false
        }
      }
    }
  })
</script>