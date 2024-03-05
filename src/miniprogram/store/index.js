import mpx, { createStore } from '@mpxjs/core'
import MapSdk from '@/wx-map-sdk/qqmap-wx-jssdk.min.js'
import dayjs from 'dayjs'
import steps from '../constant/steps'

export function checkIpx () {
  const systemInfo = wx.getSystemInfoSync()
  // 支付宝会把iphone8判定为iphone10 排除iphone10的判断
  if (systemInfo && systemInfo.model && ~systemInfo.model.search(/iPhone ?(X|1[1-9]+)/)) {
    return true
  }
  return false
}

export default createStore({
  state: {
    appReady: true,
    openid: '',
    isIphoneX: checkIpx(),
    navBarStyle: {
      title: 'home',
      color: '#000',
      bg: '',
      height: 0,
      top: 0,
      lefticon: 'wap-home-o',
      paddingBottom: 6,
      showDropdown: false,
      clickDropdown: null,
      clickLeft: null
    },
    footerNavBar: [],
    usInfo: {},
    mapSdk: new MapSdk({
      key: '7KUBZ-RTTWB-MY3UF-JFREG-DZJ52-5WB3B'
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
    steps,
    addressList: [],
    fromOrigin: '',
    cacheForm: {},
    company: '',
    biographical: {
      categoryName: '',
      category: '',
      poi: {},
      tel: '',
      note: '',
      status: 'on',
      time: {
        start: dayjs(Date.now()).format('HH:mm'),
        end: ''
      }
    },
    companyInfo: {
      area: '',
      parkSpace: '',
      category: '',
      sincere: '',
      advantage: '',
      poi: {},
      tel: '',
      status: 'on',
      time: {
        start: dayjs(Date.now()).format('HH:mm'),
        end: ''
      }
    },
    userInfo: {
      nickName: '',
      avatar: '',
      tel: ''
    },
    showUserInfoSetting: false,
    noticeTems: []
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
    setLocation ({ state, commit }) {
      return new Promise((resolve, reject) => {
        if (state.adInfo?.location?.lat) {
          resolve(state.adInfo)
          return
        }
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
              },
              fail(err) {
                console.log(err)
              }
            })
          },
          fail (err) {
            reject(err)
            mpx.showModal({
              title: '提示',
              content: '您未打开定位信息，无法为您精准推送附近的订单，建议你前往打开定位服务，方便您的使用',
              success(res) {
                if (res.confirm) mpx.openSetting()
              }
            })
          }
        })
      })
    }
  }
})
