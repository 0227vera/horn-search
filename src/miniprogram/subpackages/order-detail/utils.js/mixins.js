import mpx from '@mpxjs/core'
import { getReleaseOneById, getUserList } from '@/api'
import dayjs from 'dayjs'
import store from '@/store'
const mixin = {
  onShareAppMessage() {
    const path = encodeURIComponent(`/order-detail/pages/detail-to-worker?id=${this._id}&fromOrigin=${this.fromOrigin}`)
    return {
      title: this.shareTitle,
      path: `/pages/page?type=mp&path=${path}`,
      imageUrl: this.images?.[0] || ''
    }
  },
  data: {
    loading: true,
    orderData: {},
    params: {},
    images: []
  },
  computed: {
    ...store.mapState(['openid', 'fromOrigin']),
    shareTitle() {
      if (!Object.keys(this.orderData).length) {
        return ''
      }
      const actions = {
        bossWorker: () => {
          let text = this.orderData.categoryName
          if (this.orderData.categorySub) {
            text += `(${this.orderData.categorySub})`
          }
          text += `/${this.orderData.categoryNum}人`
          text += `/${this.orderData.categoryTypeName}`
          return text
        },
        factoryCooper: () => {
          return `${this.orderData.cooperTypeName}/${this.orderData.num}件左右`
        },
        leaseTransfer: () => {
          let text = this.orderData.categoryName
          if (this.orderData.categorySub) {
            text += `(${this.orderData.categorySub})`
          }
          text += `-${this.orderData.area}平米-${this.orderData.price}${this.orderData.priceUnitName}`
          return text
        },
        usedDetect: () => {
          let text = this.orderData.categoryName
          if (this.orderData.categorySub) {
            text += `(${this.orderData.categorySub})`
          }
          if (this.orderData.price) {
            text += `-${this.orderData.price}元`
          }
          return text
        },
        tailings: () => {
          let text = this.orderData.categoryName
          if (this.orderData.categorySub) {
            text += `(${this.orderData.categorySub})`
          }
          return text
        }
      }
      return actions?.[this.fromOrigin]?.()
    },
    clickLeft() {
      return () => {
        if (this.params.isBack === 'true') {
          mpx.navigateBack()
        } else {
          mpx.reLaunch({
            url: `/homepage/pages/index`
          })
        }
      }
    }
  },
  async onLoad(params) {
    this.setState({
      fromOrigin: params.fromOrigin
    })
    this.params = params
    if (!params.id) {
      this.clickLeft()
      return
    }
    this.loading = true
    const res = await getReleaseOneById(params)
    this.orderData = res.data || {}
    const { categoryName, categorySub, categoryNum, categoryTypeName, category, price, priceUnit, poi, tel, images, note, status, calllist, _id, readlist, OPENID } = res.data || {}
    this.poi = poi
    this.tel = tel
    this._id = _id
    this.images = images
    this.categoryName = categoryName
    this.categoryTypeName = categoryTypeName
    this.categoryNum = categoryNum
    this.categorySub = categorySub
    this.category = category
    this.active = status - 1
    this.status = status
    this.category = category
    this.OPENID = OPENID
    this.readlist = readlist
    this.calllist = calllist
    this.loading = false
    if (this.isWorker) {
      this.readlistFunc(readlist)
    } else {
      const currentTime = +dayjs(Date.now()).format('HHmm')
      if (this.fromOrigin === 'bossWorker') {
        const and = {
          'biographical.category': ['like', category],
          'biographical.start': ['<=', currentTime]
        }
        const res = await getUserList({ and, fields: 'biographical' })
        const { list = [] } = res.data || {}
        this.talentList = list
        console.log(list)
      }
    }
  },
  methods: {
    ...store.mapMutations(['setState']),
    priviewImage(index) {
      wx.previewMedia({
        current: index,
        sources: this.images.map(i => ({
          url: i,
          type: 'image'
        }))
      })
    }
  }
}

export default mixin
