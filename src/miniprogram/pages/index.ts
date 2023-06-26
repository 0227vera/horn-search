import { createPage } from '@mpxjs/core'
import store from '../store'

createPage({
  onShareAppMessage() {
    return {
      title: '分享给朋友'
    }
  },
  data: {
    text: ''
  },
  computed: {
    ...store.mapState(['navBarStyle', 'footerNavBar'])
  },
  methods: {
    ...store.mapMutations(['setCurrentKey']),
    tapItem(item) {
      this.setCurrentKey(item.key)
    }
  }
})
