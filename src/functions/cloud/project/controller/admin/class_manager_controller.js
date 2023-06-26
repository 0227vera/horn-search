const BaseAdminController = require('./base_admin_controller.js')
const ClassManagerService = require('../../service/admin/class_manager_service.js')

class ClassManagerController extends BaseAdminController {
  // 管理分类
  async getList() {
    const service = new ClassManagerService()
    const res = await service.getList()
    return res
  }

  async addClassItem() {
    const service = new ClassManagerService()
    const res = await service.addClassItem(this._event.params)
    return res
  }

  async updateClassItem() {
    const service = new ClassManagerService()
    const res = await service.updateClassItem(this._event.params)
    return res
  }

  async deleteClassItem() {
    const service = new ClassManagerService()
    const res = await service.deleteClassItem(this._event.params)
    return res
  }
}

module.exports = ClassManagerController
