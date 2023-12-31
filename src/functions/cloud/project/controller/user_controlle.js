const BaseController = require('./base_controller')
const UserService = require('../service/user_service.js')

class UserController extends BaseController {
  async getList() {
    const where = {
      // OPENID: this._openId
    }
    const { fields = '*', ...newWhere } = this._event.params || {}
    const service = new UserService()
    const res = await service.getList(newWhere, fields)
    return res
  }

  async getOne() {
    const where = {
      OPENID: this._openId
    }
    Object.assign(where, this._event.params || {})
    const service = new UserService()
    let res = await service.getOne(where)
    if (!res) {
      // note: 查不到用户就先在库里建立一个use在返回相关信息
      const user = await this.create({
        OPENID: this._openId
      })
      res = await service.getOne(where)
    }
    return res
  }

  async create(data) {
    const service = new UserService()
    let params = {}
    if (data) {
      params = data
    }
    params = Object.assign({}, this._event.params, {
      OPENID: this._openId
    })
    const res = await service.create(params)
    return res
  }

  async update() {
    const where = {}
    // note: 如果是用户自己更新，直接用openid处理，如果是甲方处理，需要用_id处理
    if (!this._event.params._id) {
      Object.assign(where, {
        OPENID: this._openId
      })
    }
    Object.assign(where, this._event.params || {})
    const service = new UserService()
    const res = await service.update(where)
    return res
  }

  async delete() {
    const service = new UserService()
    const res = await service.delete(this._event.params)
    return res
  }
}

module.exports = UserController
