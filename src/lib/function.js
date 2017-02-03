/* eslint-disable */
import _ from 'lodash'
_.mixin(require('lodash-deep'))
export default {
  /**
   * Get a item in a tree list with them id
   * @param {Array} subMenuItems - The tree liste array
   * @param {string} id - id for the research
   */
  depthOf (object) {
    var level = 1;
    var key;
    for(key in object) {
        if (!object.hasOwnProperty(key)) continue
        if(typeof object[key] == 'object'){
            var depth = utils.depthOf(object[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
  },
  getSubMenuKey (object, needle, isDeep) {
    let response = false
    if (typeof isDeep === 'undefined') { isDeep = false }
    
    // console.log(object)
    if (!_.isEmpty(object)) {
      for (let key in object) {
        console.log(needle === key)
        if (needle === key) {
          console.log('is deep' + isDeep)
          console.log(object[key])
          response = object[key]
        } else {
          console.log(response)
          console.log(object[key])
          console.log(object[key] !== 'T')
          let isEmpty = object[key] !== 'T'
          console.log('is empty ' + _.isEmpty(object[key]))
          // if (isDeep) {
          //   return console.log(object)
          // }
          if ( isEmpty && !response) {
            response = this.getSubMenuKey(object[key], needle, true)
            if (isDeep) { return response }
          } else { 
            // response = false
            return response
          }
        }
      }
    }
    if (response) { return response } else {
      return false
    }
  },
  getSubMenuItem (subMenuItems, ref) {
    let key
    let id
    let checkValue
    let isKey = false
    console.log(subMenuItems)
    if (typeof ref === 'object') {
      key = Object.keys(ref)[0]
      checkValue = ref[key]
    } else if (typeof ref === 'string') {
      isKey = true
    } else {
      key = 'id'
      checkValue = parseInt(ref)
    }
    console.log(isKey)
    if (subMenuItems) {
      console.log(typeof subMenuItems)
      for (var i = 0; i < subMenuItems.length; i++) {
        console.log(subMenuItems[i])
        if (isKey) {
        } else {
          console.log(subMenuItems[i])
          if (subMenuItems[i][key] === checkValue) {
            return subMenuItems[i]
          }
          let found = this.getSubMenuItem(subMenuItems[i].children, id)
          // console.log(found)
          if (found) return found
        }
      }
    }
  },
  /**
   * Get the path of an item in a tree list
   * @param {Array} subMenuItems - The tree liste array
   * @param {string} id - id for the research
   */
  getParent (item, target, result) {
    // let r
    // r = 'rec'
    if (!result) {
      // r = 'no-rec'
      result = []
    }
    result.push(item)
    if (true) {

    }

    if (typeof item !== undefined) {
      if (item.parent_id) {
        let parent = this.getSubMenuItem(target, item.parent_id)
        result = this.getParent(parent, target, result)
        return result
      } else {
        return result
      }
    }
  },
  parseUrl (url) {
    return url.split('/')
  }
}
