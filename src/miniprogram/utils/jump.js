import mpx from '@mpxjs/core'
import Dialog from '@vant/weapp/dialog/dialog'

const jumpAction = item => {
  const actions = {
    mp: () => {
      if (item.redirect) {
        mpx.redirectTo({
          url: item.url
        })
        return
      }
      mpx.navigateTo({
        url: item.url
      })
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
  actions?.[item.jumptype]?.()
}

export default jumpAction
