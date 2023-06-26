import mpx, { createApp } from '@mpxjs/core'
import apiProxy from '@mpxjs/api-proxy'
import store from './store'
import setting from './setting/setting'

mpx.use(apiProxy, { usePromise: true })

createApp({
  ...store.mapMutations(['initNavBarStyle']),
  onLaunch() {
    this.initNavBarStyle()
    wx.cloud.init({
      env: setting.CLOUD_ID,
      traceUser: true
    })
  }
})
