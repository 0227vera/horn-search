const appOther = require('./app_other.js')
const cloudBase = require('../cloud/cloud_base.js')
const util = require('../utils/util.js')
const appUtil = require('./app_util.js')
const routes = require('config/route.js')
const dayjs = require('dayjs')
const config = require('../../config/config.js')

const splitLine = '▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦▦'

async function app(event) {
  let {
    eventX,
    isOther
  } = appOther.handlerOther(event)
  event = eventX

  const cloud = cloudBase.getCloud()
  const wxContext = cloud.getWXContext()
  let r = ''
  try {
    // note: 错误排查，如果没有路由，可以理解为https的url
    if (!util.isDefined(event.route)) {
      console.error(`Route Not Defined: ${event}`)
      return appUtil.handlerSvrErr()
    }

    r = event.route.toLowerCase()
    // note: 如果没有/需要直接报错
    if (!r.includes('/')) {
      console.error(`Route Format error[${r}]: ${event}`)
      return appUtil.handlerSvrErr()
    }

    // note: 如果没有得到配置的对应value值
    if (!util.isDefined(routes[r])) {
      console.error(`Route [${r}] Is Not Exist: ${event}`)
      return appUtil.handlerSvrErr()
    }

    // note: 进入正常的逻辑处理中去，根据云函数的请求来获取具体的模块，用配置的路由的value值去做相关的请求处理，使用@将controller层和每一层的执行方法定义出来
    let routesArr = routes[r].split('@')
    let [controllerName, actionName] = routesArr

    const time = dayjs().format('YYYY/MM/DD HH:mm:ss')
    const timeTicks = dayjs().valueOf()

    const openId = wxContext.OPENID

    // note: 将controller层和执行模块进行记录，以及用户的openid收集
    console.log(splitLine)
    console.log(`【↘${time} ENV (${config.CLOUD_ID})】【Request Base↘↘↘】\n【↘Route =***${r}】\n【↘Controller = ${controllerName}】\n【↘Action = ${actionName}】\n【↘OPENID = ${openId}】`)

    // note: 引入对应模块的逻辑controller的名称
    controllerName = controllerName.toLowerCase().trim()
    // note: 获取相关的controller并实例化
    const ControllerClass = require('project/controller/' + controllerName + '.js')
    const controller = new ControllerClass(r, openId, event)

    // note: 初始化接口逻辑处理
    if (controller.initSetup) {
      await controller.initSetup()
    }
    let result = await controller[actionName]()

    // note: 返回值处理，判断是否需要包装成小程序的规范处理
    if (isOther) {
      return result
    } else {
      result = result ? appUtil.handlerData(result, r) : appUtil.handlerSucc(r)
    }
    // note: 记录每个接口调用耗时和具体请求和响应的时间
    const endTime = dayjs().format('YYYY/MM/DD HH:mm:ss')
    const endTimeTicks = dayjs().valueOf() - timeTicks
    console.log(`【${endTime}】【Return Base↗↗↗】\n【↗Route =***${r}】\n【↗Duration = ${endTimeTicks}ms】\n【↗↗OUT DATA】= `, result)
    console.log(splitLine)
    return result
  } catch (ex) {
    const log = cloud.logger()
    const time = dayjs().format('YYYY/MM/DD HH:mm:ss')
    console.error(`【${time}】【Return Base↗↗↗】\n【↗Route = ${r}】\\Exception MSG = ${ex.message}, CODE=${ex.code}`)
    // node: 系统级错误定位调试
    if (ex.name !== 'AppError') throw ex
    console.log(splitLine)
    if (ex.name === 'AppError') {
      log.warn({
        route: r,
        errCode: ex.code,
        errMsg: ex.message
      })
      return appUtil.handlerAppErr(ex.message, ex.code)
    } else {
      log.error({
        route: r,
        errCode: ex.code,
        errMsg: ex.message,
        errStack: ex.stack
      })
      return appUtil.handlerSvrErr()
    }
  }
}

module.exports = {
  app
}
