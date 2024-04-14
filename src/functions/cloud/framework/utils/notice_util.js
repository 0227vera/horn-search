const UserModel = require('../../project/model/user_model.js')
const { sendMiniOnceTempMsg } = require('../lib/mini_lib.js')
const { NEW_ORDER_NOTICE } = require('../../config/msg_config.js')
const dayjs = require('dayjs')
const { log } = require('../cloud/cloud_util.js')

const tran = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`)

const temValue = (origin, order) => {
  const actions = {
    bossWorker: (order) => ({
      thing3: {
        value: `${order.categoryName}-${order.categoryTypeName}-${order.categoryNum}人`
      },
      thing4: {
        value: order.add || '点击进入小程序查看详情'
      }
    }),
    factoryCooper: order => ({
      thing3: {
        value: `${order.cooperTypeName}-${order.factoryScaleName}-${order.people}左右`
      },
      thing4: {
        value: `${order.productTypeName}-${order.num}件（左右）`
      }
    }),
    leaseTransfer: order => ({
      thing3: {
        value: order.categoryName
      },
      thing4: {
        value: order.add || '点击进入小程序查看详情'
      }
    }),
    usedDetect: order => ({
      thing3: {
        value: order.categoryName + `数量：${order.num || '若干'}`
      },
      thing4: {
        value: order.price || '详情电话沟通'
      }
    }),
    tailings: order => ({
      thing3: {
        value: order.categoryName
      },
      thing4: {
        value: order.note || '点击进入小程序查看详情'
      }
    })
  }
  return actions[origin](order)
}

const sendToWorkers = async function(id, origin) {
  const and = {
    noticeTems: NEW_ORDER_NOTICE
  }
  const res = await UserModel.getList({ and })
  const name = tran(origin)
  const ReleaseModel = require(`../../project/model/release_${name}_model.js`)
  const order = await ReleaseModel.getOne({ _id: id })
  const time = dayjs(order.RELEASE_ADD_TIME).format('YYYY年MM月DD日 HH:mm')
  const data = Object.assign({}, temValue(origin, order), {
    character_string1: {
      value: order._id
    },
    thing2: {
      value: order.company || '点击查看'
    },
    time5: {
      value: time
    }
  })
  Object.keys(data).forEach(item => {
    const value = data[item].value + ''
    console.log('===========>', item, value)
    if (item.includes('thing')) {
      data[item].value = value ? value.slice(0, 20) : '点击查看'
    }
  })
  console.log('========+>', data)
  for (let i = 0; i < res.list.length; i++) {
    let item = res.list[i]
    const page = `/order-detail/pages/detail-to-worker?id=${id}&fromOrigin=${origin}`
    sendMiniOnceTempMsg({
      touser: item.OPENID,
      page,
      templateId: NEW_ORDER_NOTICE,
      data
    }).then(res => {
      console.log('success========>', res)
    })
  }
}

module.exports = { sendToWorkers }
