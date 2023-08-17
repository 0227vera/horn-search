const BaseService = require('../base_service.js')
const ConstantModel = require('../../model/constant_model.js')

class ConstantService extends BaseService {
  async getOne() {
    let where = {}
    let res = await ConstantModel.getOne(where)
    return res
  }

  async update(data = {}) {
    const { _id, ...newData } = data
    const where = _id ? { _id } : {}
    const res = await ConstantModel.insertOrUpdate(where, newData)
    return res
  }
}

module.exports = ConstantService
