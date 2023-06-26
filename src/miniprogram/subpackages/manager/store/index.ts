import { createStore } from '@mpxjs/core'
import { getClassManagerList } from '@/api'

export default createStore({
  state: {
    class_list: []
  },
  getters: {},
  mutations: {
    changeClassList(state, data) {
      state.class_list = data
    }
  },
  actions: {
    async getClassList({ commit }) {
      const res:any = await getClassManagerList({})
      commit('changeClassList', res?.data?.list)
    }
  }
})
