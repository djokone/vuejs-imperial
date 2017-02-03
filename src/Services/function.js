
export default {
  /**
   * Get a item in a tree list with them id
   * @param {Array} subMenuItems - The tree liste array
   * @param {string} id - id for the research
   */
  getSubMenuItem (subMenuItems, id) {
    id = parseInt(id)
    if (subMenuItems) {
      for (var i = 0; i < subMenuItems.length; i++) {
        if (subMenuItems[i].id === id) {
          return subMenuItems[i]
        }
        let found = this.getSubMenuItem(subMenuItems[i].children, id)
        // console.log(found)
        if (found) return found
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
    if (typeof item !== 'undefined') {
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
