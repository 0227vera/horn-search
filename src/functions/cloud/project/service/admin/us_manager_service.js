const BaseService = require('../base_service.js')
const UsModel = require('../../model/us_model.js')

class UsManagerService extends BaseService {
  async getList() {
    let where = {}
    let res = await UsModel.getList(where)
    return res
  }

  async updateUsItem(data = {}) {
    const { _id, ...newData } = data
    const where = _id ? { _id } : {}
    const res = await UsModel.insertOrUpdate(where, newData)
    return res
  }
}

module.exports = UsManagerService
