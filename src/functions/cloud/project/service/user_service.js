const BaseService = require('./base_service.js')
const UserModel = require('../model/user_model.js')

class UserManagerService extends BaseService {
  async getOne(where = {}) {
    let res = await UserModel.getOne(where)
    return res
  }

  async getList(where = {}) {
    let res = await UserModel.getList(where)
    return res
  }

  async create(data = {}) {
    const res = await UserModel.insert(data)
    return res
  }

  async update(data = {}) {
    const { _id, ...newData } = data
    const res = await UserModel.insertOrUpdate({ OPENID: data.OPENID }, newData)
    return res
  }

  async delete(data = {}) {
    const res = await UserModel.del({ _id: data._id })
    return res
  }
}

module.exports = UserManagerService
