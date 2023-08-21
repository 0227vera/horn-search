import mpx, { createStore } from '@mpxjs/core'
import MapSdk from '@/wx-map-sdk/qqmap-wx-jssdk.min.js'
import { getReleaseList } from '@/api'

export default createStore({
  state: {
    navBarStyle: {
      title: 'home',
      color: '#666',
      bg: '',
      height: 0,
      top: 0,
      lefticon: 'wap-home-o',
      paddingBottom: 6,
      clickLeft: null
    },
    footerNavBar: [],
    role: '',
    usInfo: {},
    mapSdk: new MapSdk({
      key: 'PECBZ-2K76U-PCTVV-2WL2B-V3YXE-PFBIR'
    }),
    adInfo: {},
    location: {
      longitude: 0,
      latitude: 0
    },
    showBottomNav: true,
    orderList: [],
    orderListReqLoading: true,
    categoryItems: {},
    steps: [],
    addressList: []
  },
  getters: {
    currentGooterList(state) {
      return state.footerNavBar?.[state.role]
    }
  },
  mutations: {
    initNavBarStyle(state) {
      const rect = mpx.getMenuButtonBoundingClientRect()
      state.navBarStyle = Object.assign(state.navBarStyle, {
        top: rect.top,
        height: rect.height
      })
    },
    setNavBarStyle(state, data) {
      Object.assign(state.navBarStyle, data)
    },
    initFooterNavBar(state, data) {
      state.footerNavBar = data
    },
    setRole(state, data) {
      state.role = data
    },
    setCurrentKey(state, data) {
      state.footerNavBar[state.role].currentkey = data
    },
    setOrderNumInfo(state, data) {
      state.footerNavBar[state.role].list = state.footerNavBar[state.role].list.map(item => {
        item.key === 'order' && (item.info = data)
        return item
      })
    },
    setUsInfo(state, data = {}) {
      Object.assign(state.usInfo, data)
    },
    updateLocation(state, data) {
      state.location = Object.assign(state.location, data)
    },
    updateAdInfo(state, data) {
      state.adInfo = Object.assign(state.adInfo, data)
    },
    updateCategoryItems(state, data) {
      state.categoryItems = data
    },
    setShowBottomNav(state, data) {
      state.showBottomNav = data
    },
    setOrderList(state, data) {
      state.orderList = data
    },
    setOrderListReqLoading(state, data) {
      state.orderListReqLoading = data
    },
    setSteps(state, data) {
      state.steps = data
    },
    updateAddressList(state, data) {
      state.addressList = data
    }
  },
  actions: {
    // node: 如果是boss的状态下获取所有的订单情况，并添加对应的数量标注
    async getReleaseList({ commit }) {
      commit('setOrderListReqLoading', true)
      const res = await getReleaseList()
      const list = res.data.list
      commit('setOrderList', list)
      list.length && commit('setOrderNumInfo', list.length)
      commit('setOrderListReqLoading', false)
    },
    setLocation ({ state, commit }) {
      return new Promise((resolve, reject) => {
        mpx.getLocation({
          type: 'gcj02',
          success (res) {
            const { longitude, latitude } = res
            commit('updateLocation', { longitude, latitude })
            state.mapSdk.reverseGeocoder({
              location: `${latitude},${longitude}`,
              success (res) {
                const { result } = res || {}
                commit('updateLocation', {
                  longitude: result.location.lng || state.location.longitude,
                  latitude: result.location.lat || state.location.latitude
                })
                commit('updateAdInfo', result)
                resolve(res)
              }
            })
          },
          fail (err) {
            reject(err)
          }
        })
      })
    }
  }
})
