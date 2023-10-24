/**
 * Notes: 后台管理模块 基类
 * Date: 2021-03-15 07:48:00
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */

const BaseService = require('../base_service.js')

const cloudBase = require('../../../framework/cloud/cloud_base.js')
const timeUtil = require('../../../framework/utils/time_util.js')
const appCode = require('../../../framework/core/app_code.js')

const config = require('../../../config/config.js')

const AdminModel = require('../../model/admin_model.js')
const LogModel = require('../../model/log_model.js')

class BaseAdminService extends BaseService {
  /** 是否管理员 */
  async isAdmin(openid) {
    let where = {
      ADMIN_OPENID: openid
    }
    let admin = await AdminModel.getOne(where)
    if (!admin) {
      this.AppError('管理员不存在', appCode.ADMIN_ERROR)
    }
    return admin
  }

  /** 写入日志 */
  async insertLog(content, admin, type) {
    if (!admin) return
    if (config.MASK_IS_OPEN && config.MASK_ADMIN_PHONE && admin.ADMIN_PHONE === config.MASK_ADMIN_PHONE) return
    let data = {
      LOG_CONTENT: content,
      LOG_ADMIN_ID: admin.ADMIN_ID,
      LOG_ADMIN_NAME: admin.ADMIN_NAME,
      LOG_TYPE: type
    }
    await LogModel.insert(data)
  }
}

module.exports = BaseAdminService
