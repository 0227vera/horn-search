const BaseService = require('./base_service.js')
const ReleaseModel = require('../model/release_model.js')
const modelMap = {
  ReleaseModel,
  bossWorkerModel: ReleaseModel
}

class ReleaseManagerService extends BaseService {
  constructor (params) {
    super()
    this.origin = params.origin
    const key = `${this.origin}Model`
    this.model = modelMap[key]
  }
  async getList(where = {}) {
    const { fromOrigin, ...newWhere } = where
    let res = await this.model.getList(newWhere)
    return res
  }

  async getOne(where = {}) {
    const { fromOrigin, ...newWhere } = where
    let res = await this.model.getOne(newWhere)
    return res
  }

  async getCount(where = {}) {
    const { fromOrigin, ...newWhere } = where
    let res = await this.model.count(newWhere)
    return res
  }

  async create(data = {}) {
    const { fromOrigin, ...newData } = data
    const res = await this.model.insert(newData)
    return res
  }

  async update(data = {}) {
    const { _id, fromOrigin, ...newData } = data
    const res = await this.model.insertOrUpdate({ _id: data._id }, newData)
    return res
  }

  async delete(data = {}) {
    const res = await this.model.del({ _id: data._id })
    return res
  }
}

module.exports = ReleaseManagerService
