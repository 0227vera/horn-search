const AppError = require('../../framework/core/app_error.js')
const appCode = require('../../framework/core/app_code.js')
const dbUtil = require('../../framework/database/db_util.js')
const config = require('../../config/config.js')
const AdminModel = require('../model/admin_model.js')
const dayjs = require('dayjs')

class BaseService {
  constructor() {
    this._timestamp = dayjs().valueOf()
  }

  AppError(msg, code = appCode.LOGIC) {
    throw new AppError(msg, code)
  }

  getProjectId() {
    return global.PID || 'unknow'
  }

  async initSetup(openid) {
    // 如果没有需要创建的基本集合创建相关的集合
    let arr = config.COLLECTION_NAME
    for (let k in arr) {
      if (!await dbUtil.isExistCollection(arr[k])) {
        await dbUtil.createCollection(arr[k])
      }
    }
    // note: 如果没有管理员的集合创建一个管理员的库，并插入一条管理员信息
    if (await dbUtil.isExistCollection(`${config.FIELD_PREFIX}admin`)) {
      const adminCnt = await AdminModel.count({})
      if (!adminCnt) {
        const data = {
          ADMIN_NAME: '勇士',
          ADMIN_PHONE: '18331588738',
          ADMIN_OPENID: openid
        }
        await AdminModel.insert(data)
      }
    }
  }
}

module.exports = BaseService
