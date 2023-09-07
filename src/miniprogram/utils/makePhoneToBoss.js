import store from '@/store'
import { updateRelease } from '@/api'

const makePhoneToBoss = async (item) => {
  const res = await wx.getUserInfo()
  const { userInfo } = res
  wx.makePhoneCall({
    phoneNumber: item.tel,
    success() {
      if (item.calllist?.length) {
        const isCalled = item.calllist.find(item => item.openid === store.state.openid)
        if (isCalled) {
          updateRelease({
            _id: item._id,
            calllist: item.calllist.map(item => {
              if (item.openid === store.state.openid) {
                item.times++
              }
              item.time.push(Date.now())
              return item
            })
          })
        } else {
          updateRelease({
            _id: item._id,
            calllist: item.calllist.concat({
              avatarUrl: userInfo.avatarUrl,
              openid: store.state.openid,
              times: 1,
              time: [Date.now()]
            })
          })
        }
      } else {
        updateRelease({
          _id: item._id,
          status: '3',
          calllist: [{
            avatarUrl: userInfo.avatarUrl,
            openid: store.state.openid,
            times: 1,
            time: [Date.now()]
          }]
        })
      }
    },
    fail(err) {
      console.error(err)
    }
  })
}

export default makePhoneToBoss
