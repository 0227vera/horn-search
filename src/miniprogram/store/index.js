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
    },
    isWorker(state) {
      return state.role === 'worker'
    },
    isBoss(state) {
      return state.role === 'boss'
    },
    isBusiness(state) {
      return state.role === 'business'
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
    setState(state, obj) {
      if (Object.prototype.toString.call(obj) !== '[object Object]') {
        console.error('setState传参应为obj数据类型，请检查-->', obj)
        return
      }
      Object.keys(obj).forEach(item => {
        if (state[item] === undefined) {
          console.error(`state中不含${item}的key，请检查key值`)
        } else {
          state[item] = obj[item]
        }
      })
    },
    setCurrentKey(state, data) {
      state.footerNavBar[state.role].currentkey = data
    },
    setOrderNumInfo(state, data) {
      state.footerNavBar[state.role].list = state.footerNavBar[state.role].list.map(item => {
        item.key === 'order' && (item.info = data)
        return item
      })
    }
  },
  actions: {
    // node: 如果是boss的状态下获取所有的订单情况，并添加对应的数量标注
    async getReleaseList({ commit }, params) {
      commit('setState', {
        orderListReqLoading: true
      })
      const res = await getReleaseList(params)
      const list = res.data.list
      const obj = {
        orderList: list,
        orderListReqLoading: false
      }
      commit('setState', obj)
      list.length && commit('setOrderNumInfo', list.length)
    },
    setLocation ({ state, commit }) {
      return new Promise((resolve, reject) => {
        mpx.getLocation({
          type: 'gcj02',
          success (res) {
            const { longitude, latitude } = res
            commit('setState', {
              location: { longitude, latitude }
            })
            state.mapSdk.reverseGeocoder({
              location: `${latitude},${longitude}`,
              success (res) {
                const { result } = res || {}
                commit('setState', {
                  location: {
                    longitude: result.location.lng || state.location.longitude,
                    latitude: result.location.lat || state.location.latitude
                  },
                  adInfo: result
                })
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
