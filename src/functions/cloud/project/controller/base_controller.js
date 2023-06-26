const dayjs = require('dayjs')
const Controller = require('../../framework/client/controller.js')
const dataCheck = require('../../framework/validate/data_check.js')
const config = require('../../config/config.js')
const AppError = require('../../framework/core/app_error.js')
const appCode = require('../../framework/core/app_code.js')
const BaseService = require('../service/base_service.js')

global.PID = 'unknown'

class BaseController extends Controller {
  constructor(route, openId, event) {
    super(route, openId, event)
    if (!openId) {
      console.error('OPENID is unfined')
      throw new AppError('OPENID is unfined', appCode.SVR)
    }
    global.PID = config.PID || event.PID
    this.dev_log({
      'event.PID': event.PID,
      'global.PID': global.PID
    })
    this._timestamp = dayjs().valueOf()
    const time = dayjs().format('YYYY/MM/DD HH:mm:ss')
    this.dev_log(Object.assign({}, this._request, { time, _timestamp: this._timestamp }), true)
  }

  validateData(rules = {}) {
    let input = this._request
    return dataCheck.check(input, rules)
  }

  async initSetup() {
    let service = new BaseService()
    await service.initSetup(this._openId)
  }
}

module.exports = BaseController
