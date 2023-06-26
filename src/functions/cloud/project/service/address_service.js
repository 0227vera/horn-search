const BaseService = require('./base_service.js')
const AddressModel = require('../model/address_model.js')

class AddressManagerService extends BaseService {
  async getList() {
    let where = {}
    let res = await AddressModel.getList(where)
    return res
  }

  async create(data = {}) {
    const res = await AddressModel.insert(data)
    return res
  }

  async update(data = {}) {
    const { _id, ...newData } = data
    const res = await AddressModel.insertOrUpdate({ _id: data._id }, newData)
    return res
  }

  async delete(data = {}) {
    const res = await AddressModel.del({ _id: data._id })
    return res
  }
}

module.exports = AddressManagerService
