import mpx from '@mpxjs/core'
import store from '@/store'
import { updateRelease } from '@/api'

const makePhoneToBoss = item => {
  const { userInfo = {}, openid } = store.state
  // if (!userInfo.tel) {
  //   store.commit('setState', {
  //     showUserInfoSetting: true
  //   })
  //   mpx.showToast({
  //     icon: 'none',
  //     title: '请先完善个人信息',
  //     duration: 1500,
  //     mask: true
  //   })
  //   getApp().eventBus.once('userinfo-finish', () => {
  //     makePhoneToBoss(item)
  //     console.log(item)
  //   })
  //   return
  // }
  wx.makePhoneCall({
    phoneNumber: item.tel,
    success() {
      const pushItem = {
        avatarUrl: userInfo.avatar,
        nickName: userInfo.nickName,
        tel: userInfo.tel,
        openid,
        times: 1,
        time: [Date.now()]
      }
      if (item.calllist?.length) {
        const isCalled = item.calllist.find(item => item.openid === openid)
        if (isCalled) {
          updateRelease({
            _id: item._id,
            calllist: item.calllist.map(item => {
              if (item.openid === openid) {
                item.times++
              }
              item.time.push(Date.now())
              return item
            })
          })
        } else {
          updateRelease({
            _id: item._id,
            calllist: item.calllist.concat(pushItem)
          })
        }
      } else {
        updateRelease({
          _id: item._id,
          status: '3',
          calllist: [pushItem]
        })
      }
    },
    fail(err) {
      console.error(err)
    }
  })
}

export default makePhoneToBoss
