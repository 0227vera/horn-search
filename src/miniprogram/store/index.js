import mpx, { createStore } from '@mpxjs/core'
import MapSdk from '@/wx-map-sdk/qqmap-wx-jssdk.min.js'
import { getUsList } from '@/api'
import { categoryItems } from '@/setting/common'
import footerNavBar from '@/const/footer'

export default createStore({
  state: {
    categoryItems: JSON.parse(JSON.stringify(categoryItems)),
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
    footerNavBar,
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
    showBottomNav: true
  },
  getters: {
    currentGooterList(state) {
      return state.footerNavBar[state.role]
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
    setRole(state, data) {
      state.role = data
    },
    setCurrentKey(state, data) {
      state.footerNavBar[state.role].currentkey = data
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
    }
  },
  actions: {
    async getUsInfo({ commit }) {
      const res = await getUsList({})
      commit('setUsInfo', res.data?.list?.[0] ?? {})
      return res.data?.list?.[0] ?? {}
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
