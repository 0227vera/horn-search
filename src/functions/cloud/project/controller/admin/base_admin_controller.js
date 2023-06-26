const BaseController = require('../base_controller.js')
const BaseAdminService = require('../../service/admin/base_admin_service.js')

const timeUtil = require('../../../framework/utils/time_util.js')

class AdminController extends BaseController {
  constructor(route, openId, event) {
    super(route, openId, event)
    // 当前时间戳
    this._timestamp = timeUtil.time()
    this._admin = null
    this._adminId = '0'
  }

  /** 是否管理员  */
  async isAdmin() {
    // 判断是否管理员
    const service = new BaseAdminService()
    const admin = await service.isAdmin()
    this._admin = admin
    this._adminId = admin.ADMIN_ID
    return admin
  }

  /** 记录日志 */
  async log(content, type) {
    let service = new BaseAdminService()
    await service.insertLog(content, this._admin, type)
  }

  /** 日志除前获取名称 */
  async getNameBeforeLog(type, oid) {
    let service = new BaseAdminService()
    return await service.getNameBeforeLog(type, oid)
  }
}

module.exports = AdminController
