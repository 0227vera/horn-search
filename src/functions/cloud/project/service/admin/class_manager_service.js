const BaseService = require('../base_service.js')
const ClassModel = require('../../model/class_model.js')

class ClassManagerService extends BaseService {
  async getList() {
    let where = {}
    let res = await ClassModel.getList(where)
    return res
  }

  async addClassItem(data = {}) {
    const res = await ClassModel.insert(data)
    return res
  }

  async updateClassItem(data = {}) {
    const res = await ClassModel.insertOrUpdate({ _id: data._id }, { name: data.name })
    return res
  }

  async deleteClassItem(data = {}) {
    const res = await ClassModel.del({ _id: data._id })
    return res
  }
}

module.exports = ClassManagerService
