const BaseAdminController = require('./base_admin_controller.js')
const CompanyService = require('../../service/admin/company_service.js')

class CompanyController extends BaseAdminController {
  async getOne() {
    const where = {
      OPENID: this._openId
    }
    Object.assign(where, this._event.params || {})
    const service = new CompanyService()
    const res = await service.getOne(where)
    return res
  }

  async update() {
    const service = new CompanyService()
    const res = await service.update(this._event.params)
    return res
  }
}

module.exports = CompanyController
