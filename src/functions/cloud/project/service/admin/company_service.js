const BaseService = require('../base_service.js')
const CompanyModel = require('../../model/company_model.js')

class CompanyService extends BaseService {
  async getOne() {
    let where = {}
    let res = await CompanyModel.getOne(where)
    return res
  }

  async update(data = {}) {
    const { _id, ...newData } = data
    const where = _id ? { _id } : {}
    const res = await CompanyModel.insertOrUpdate(where, newData)
    return res
  }
}

module.exports = CompanyService
