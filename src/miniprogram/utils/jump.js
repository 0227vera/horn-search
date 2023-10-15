import mpx from '@mpxjs/core'
import Dialog from '@vant/weapp/dialog/dialog'

const handleUrlParams = (url, params) => {
  const str = Object.keys(params).map(item => `${item}=${params[item]}`).join('&')
  if (url.includes('?')) {
    url += str
  } else {
    url += `?${str}`
  }
  return url
}

const jumpAction = item => {
  const actions = {
    mp: () => {
      let url = item.link || item.url
      if (item.params) {
        url = handleUrlParams(url, item.params)
      }
      if (!url) {
        return
      }
      if (item.redirect) {
        mpx.redirectTo({ url })
        return
      }
      mpx.navigateTo({ url })
    },
    alert: () => {
      Dialog.alert({
        title: '提示',
        message: item.message
      })
    },
    setting: () => {
      mpx.openSetting()
    }
  }
  actions?.[item.jumptype || item.type]?.()
}

export default jumpAction
