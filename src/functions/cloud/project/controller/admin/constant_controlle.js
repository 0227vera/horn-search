const BaseAdminController = require('./base_admin_controller.js')
const ConstantService = require('../../service/admin/constant_service.js')

class ConstantController extends BaseAdminController {
  async getOne() {
    const where = {
      OPENID: this._openId
    }
    Object.assign(where, this._event.params || {})
    const service = new ConstantService()
    const res = await service.getOne(where)
    return res
  }

  async update() {
    const service = new ConstantService()
    const res = await service.update(this._event.params)
    return res
  }
}

module.exports = ConstantController
