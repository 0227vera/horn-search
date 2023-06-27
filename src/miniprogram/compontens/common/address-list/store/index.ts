import { createStoreWithThis } from '@mpxjs/core'

import { getAddressList } from '@/api'

interface AddressItem {
  address: Record<string, any>
  phone: string
}

export default createStoreWithThis({
  state: {
    list: [] as Array<AddressItem>
  },
  mutations: {
    addAddressItem(data: AddressItem) {
      this.state.list.push(data)
    },
    setAddressList(data: AddressItem[]) {
      this.state.list = data
    }
  },
  actions: {
    async getAddressList() {
      const res = await getAddressList()
      const list = res?.data?.list || []
      this.commit('setAddressList', list)
    }
  }
})
