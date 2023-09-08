const BaseService = require('./base_service.js')
const ReleaseModel = require('../model/release_model.js')

class ReleaseManagerService extends BaseService {
  async getList(where = {}) {
    let res = await ReleaseModel.getList(where)
    return res
  }

  async getOne(where = {}) {
    let res = await ReleaseModel.getOne(where)
    return res
  }

  async getCount(where = {}) {
    let res = await ReleaseModel.count(where)
    return res
  }

  async create(data = {}) {
    const res = await ReleaseModel.insert(data)
    return res
  }

  async update(data = {}) {
    const { _id, ...newData } = data
    console.log('newData---------->', newData)
    const res = await ReleaseModel.insertOrUpdate({ _id: data._id }, newData)
    return res
  }

  async delete(data = {}) {
    const res = await ReleaseModel.del({ _id: data._id })
    return res
  }
}

module.exports = ReleaseManagerService
