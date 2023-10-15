const BaseAdminController = require('./admin/base_admin_controller.js')
const ConstantService = require('../service/admin/constant_service.js')

class ConstantController extends BaseAdminController {
  async getOne() {
    const service = new ConstantService()
    const res = await service.getOne()
    return res
  }
}

module.exports = ConstantController
