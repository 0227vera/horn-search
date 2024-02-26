const ConstantService = require('../service/admin/constant_service.js')
const BaseController = require('./base_controller')
const cloudBase = require('../../framework/cloud/cloud_base.js')

class ConstantController extends BaseController {
  async getOne() {
    const service = new ConstantService()
    const res = await service.getOne()
    return res
  }
  async getPhone() {
    let cloud = cloudBase.getCloud()
    const code = this._event.params.code
    const res = await cloud.openapi.phonenumber.getPhoneNumber({
      code: this._event.params.code
    })
    return res
  }
}

module.exports = ConstantController
