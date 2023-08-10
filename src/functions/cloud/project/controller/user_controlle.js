const BaseController = require('./base_controller')
const UserService = require('../service/user_service.js')

class UserController extends BaseController {
  async getList() {
    const where = {
      OPENID: this._openId
    }
    Object.assign(where, this._event.params || {})
    const service = new UserService()
    const res = await service.getList(where)
    return res
  }

  async getOne() {
    const where = {
      OPENID: this._openId
    }
    Object.assign(where, this._event.params || {})
    const service = new UserService()
    const res = await service.getOne(where)
    return res
  }

  async create() {
    const service = new UserService()
    const params = Object.assign({}, this._event.params, {
      OPENID: this._openId
    })
    const res = await service.create(params)
    return res
  }

  async update() {
    const service = new UserService()
    const res = await service.update(this._event.params)
    return res
  }

  async delete() {
    const service = new UserService()
    const res = await service.delete(this._event.params)
    return res
  }
}

module.exports = UserController
