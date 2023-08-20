const BaseService = require('../base_service.js')
const ConstantModel = require('../../model/constant_model.js')

class ConstantService extends BaseService {
  async getOne() {
    let where = {}
    let res = await ConstantModel.getOne(where)
    console.log('service------->', res)
    return res
  }
}

module.exports = ConstantService
