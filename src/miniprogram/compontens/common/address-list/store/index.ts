import { createStoreWithThis } from '@mpxjs/core'

import { getAddressList } from '@/api'

interface AddressItem {
  address: string
  phone: string
}

export default createStoreWithThis({
  state: {
    list: [] as Array<AddressItem>
  },
  mutations: {
    addAddress(item: AddressItem) {
      this.state.list.push(item)
    },
    setAddressList(data: AddressItem[]) {
      this.state.list = data
    }
  },
  actions: {
    getAddressList() {
      getAddressList()
      console.log('get')
    }
  }
})
