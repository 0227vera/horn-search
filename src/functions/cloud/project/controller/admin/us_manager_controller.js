const BaseAdminController = require('./base_admin_controller.js')
const UsManagerService = require('../../service/admin/us_manager_service.js')

class UsManagerController extends BaseAdminController {
  async getList() {
    const service = new UsManagerService()
    const res = await service.getList()
    return res
  }

  async getOne() {
    const where = {
      OPENID: this._openId
    }
    Object.assign(where, this._event.params || {})
    const service = new UsManagerService()
    const res = await service.getOne(where)
    return res
  }

  async updateUsItem() {
    const service = new UsManagerService()
    const res = await service.updateUsItem(this._event.params)
    return res
  }
}

module.exports = UsManagerController
