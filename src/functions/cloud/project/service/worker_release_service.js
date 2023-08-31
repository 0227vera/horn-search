const BaseService = require('./base_service.js')
const WorkerReleaseModel = require('../model/worker_release_model.js')

class WorkerReleaseManagerService extends BaseService {
  async getList(where = {}) {
    let res = await WorkerReleaseModel.getList(where)
    return res
  }

  async getOne(where = {}) {
    let res = await WorkerReleaseModel.getOne(where)
    return res
  }

  async create(data = {}) {
    const res = await WorkerReleaseModel.insert(data)
    return res
  }

  async update(data = {}) {
    const { _id, ...newData } = data
    const res = await WorkerReleaseModel.insertOrUpdate({ _id: data._id }, newData)
    return res
  }

  async delete(data = {}) {
    const res = await WorkerReleaseModel.del({ _id: data._id })
    return res
  }
}

module.exports = WorkerReleaseManagerService
