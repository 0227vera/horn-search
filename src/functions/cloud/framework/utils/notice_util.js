const UserModel = require('../../project/model/user_model.js')
const ReleaseModel = require('../../project/model/release_model.js')
const { sendMiniOnceTempMsg } = require('../lib/mini_lib.js')
const { NEW_ORDER_NOTICE } = require('../../config/msg_config.js')

const sendToWorkers = async function(id) {
  const res = await UserModel.getList({})
  const order = await ReleaseModel.getOne({ _id: id })
  for (let i = 0; i < res.list.length; i++) {
    let item = res.list[i]
    if (item.role === 'worker') {
      const path = encodeURIComponent(`/order-detail/pages/detail-to-worker?id=${id}`)
      sendMiniOnceTempMsg({
        touser: item.OPENID,
        page: `/pages/page?type=mp&path=${path}`,
        lang: 'zh_CN',
        templateId: NEW_ORDER_NOTICE,
        miniprogramState: 'trial',
        data: {
          thing1: {
            value: order.categoryName
          },
          thing2: {
            value: order.categoryName
          },
          amount4: {
            value: +order.price
          },
          character_string3: {
            value: order._id
          },
          thing8: {
            value: order.note
          }
        }
      })
    }
  }
}

module.exports = { sendToWorkers }
