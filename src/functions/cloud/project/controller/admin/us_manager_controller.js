const BaseAdminController = require('./base_admin_controller.js')
const UsManagerService = require('../../service/admin/us_manager_service.js')

class UsManagerController extends BaseAdminController {
  async getList() {
    const service = new UsManagerService()
    const res = await service.getList()
    return res
  }

  async updateUsItem() {
    const service = new UsManagerService()
    const res = await service.updateUsItem(this._event.params)
    return res
  }
}

module.exports = UsManagerController
