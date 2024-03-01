import { fileUpload, addRelease, updateRelease } from '@/api'
import config from '@/constant/release.js'
import { formatNumSubmitData } from '@/subpackages/superstream/utils/utils.js'
import AddAddressUrl from '@/subpackages/address-manager/pages/add-address.mpx?resolve'
import mpx from '@mpxjs/core'
import { noticeTemplateIdList } from '@/constant/pageConfig.js'
const { ORDER_UPDATE, NEW_ORDER_NOTICE } = noticeTemplateIdList
const store = getApp().globalStore

export const mixins = {
  properties: {
    categoryTypeId: {
      type: String,
      value: ''
    }
  },
  data: {
    showPopup: false,
    popupType: '',
    tmplIds: [ORDER_UPDATE, NEW_ORDER_NOTICE],
    uploaderDisabled: false,
    toastText: '',
    checkBoxList: [],
    initCheckbox: undefined
  },
  computed: {
    ...store.mapState(['adInfo', 'fromOrigin', 'cacheForm', 'addressList', 'showBottomNav', 'company']),
    configById() {
      return config[this.categoryTypeId]
    },
    imagesValue() {
      if (this.updateObj.images.length) {
        return `已上传${this.updateObj.images.length}张图片`
      }
      return '点击下方上传图片展示更直观'
    }
  },
  async attached() {
    this.initComDate()
  },
  pageLifetimes: {
    show() {
      this.initComDate()
    }
  },
  methods: {
    ...store.mapActions(['setLocation']),
    ...store.mapMutations(['setState']),
    async initComDate() {
      if (Object.keys(this.cacheForm).length) {
        Object.keys(this.updateObj).forEach(item => {
          this.updateObj[item] = this.cacheForm[item] || this.updateObj[item]
        })
        this.setState({
          cacheForm: {}
        })
        return
      }
      await this.setLocation()
      if (this.adInfo.address) {
        this.updateObj.poi = {
          ...this.adInfo,
          name: this.adInfo.address,
          detail: this.adInfo.address
        }
      }
      this.initAddressPhone()
    },
    initAddressPhone() {
      const item = this.addressList.find(item => item.checked)
      if (item?.id) {
        this.updateObj.tel = item.phone
        this.updateObj.poi = item.address
      }
    },
    // note: 弹窗处理
    showPopupContainer(type) {
      if (!this.addressList.length && type === 'address') {
        mpx.navigateTo({
          url: AddAddressUrl
        })
      } else {
        this.showPopup = true
        this.popupType = type
      }
    },
    closePopupContainer() {
      this.showPopup = false
    },
    // note: 修改字段值
    onFieldChange(e) {
      this.updateObj[e.target.id] = e.detail
    },
    onAreaFieldChange(e) {
      this.updateObj[e.target.id] = e.detail.value
    },
    // note: 图片相关处理
    async afterRead(e) {
      this.uploaderDisabled = true
      const res = await fileUpload(e.detail.file.url)
      this.updateObj.images.push(res.fileID)
      this.uploaderDisabled = false
    },
    clearImg(item) {
      this.updateObj.images = this.updateObj.images.filter(f => f !== item)
    },
    previewMedia(index) {
      wx.previewMedia({
        current: index,
        sources: this.updateObj.images.map(item => ({
          url: item
        }))
      })
    },
    openDropdown() {
      this.setState({
        showBottomNav: false
      })
    },
    closeDropdown() {
      this.setState({
        showBottomNav: true
      })
    },
    // note: 提交操作
    async submitData(validate, formatList = []) {
      const vali = validate({
        updateObj: this.updateObj,
        subCategoryInfo: this.subCategoryInfo || {}
      })
      if (!vali.success) {
        this.toastText = vali.text
        setTimeout(() => {
          this.$refs.toast.show()
        }, 0)
        return
      }
      this.updateObj.location = this.updateObj.poi.location
      mpx.showLoading({
        title: '提交中...',
        mask: true
      });
      await this.$refs.serviceNotice?.showServiceNotice?.()
      if (formatList.length) {
        this.updateObj = formatNumSubmitData({ obj: this.updateObj, formatList })
      }
      const res = await addRelease({
        ...this.updateObj,
        status: 1
      })
      mpx.hideLoading()
      if (res.code === 200) {
        const self = this
        mpx.showToast({
          icon: 'success',
          title: '您已发布成功!',
          duration: 1000,
          complete: async () => {
            mpx.showLoading({
              title: '正在为您推送……',
              mask: true
            })
            await updateRelease({
              _id: res.data,
              status: '2'
            })
            mpx.hideLoading()
            this.initObj()
            self.triggerEvent('release-jump-done', res.data)
          }
        })
      } else {
        mpx.showToast({
          title: res.msg,
          icon: 'none'
        })
      }
    }
  }
}
