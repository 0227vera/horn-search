import mpx from '@mpxjs/core'
import Dialog from '@vant/weapp/dialog/dialog'

type JumpItem = {
  jumptype: 'mp' | 'alert' | 'setting' | 'h5',
  url: string,
  message? : string
}

const jumpAction = (item: JumpItem) => {
  const actions = {
    mp: () => {
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
