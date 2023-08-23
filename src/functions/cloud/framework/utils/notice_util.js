const UserModel = require('../../project/model/user_model.js')
const ReleaseModel = require('../../project/model/release_model.js')
const { sendMiniOnceTempMsg } = require('../lib/mini_lib.js')
const { NEW_ORDER_NOTICE } = require('../../config/msg_config.js')

const sendToWorkers = async function(id) {
    const res = await UserModel.getList({})
    console.log('userList------->', res)
    const order = await ReleaseModel.getOne({_id: id})
    console.log('order------->', order)
    for(var i = 0; i < res.list.length; i++) {
        var item = res.list[i]
        sendMiniOnceTempMsg({
            touser: item.OPENID,
            page: `/pages/page?order_id=${id}`,
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
                    value: order.price + order.priceUnit
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

module.exports = { sendToWorkers }