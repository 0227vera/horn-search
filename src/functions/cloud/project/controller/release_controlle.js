const BaseController = require('./base_controller')
const ReleaseService = require('../service/release_service.js')
const { sendToWorkers } = require('../../framework/utils/notice_util.js')

class ReleaseController extends BaseController {
  async getList() {
    const where = {}
    const { needOpenid, ...newParams } = this._event.params || {}
    if (needOpenid) {
      Object.assign(where, {
        OPENID: this._openId
      })
    }
    Object.assign(where, newParams || {})
    const init = {
      origin: this._event.params.fromOrigin
    }
    const service = new ReleaseService(init)
    const res = await service.getList(where)
    return res
  }

  async getOne() {
    if (!this._event.params.id) {
      return {}
    }
    const where = {
      _id: this._event.params.id
    }
    const service = new ReleaseService({
      origin: this._event.params.fromOrigin
    })
    const res = await service.getOne(where)
    return res
  }

  async getCount() {
    const where = {
      ...(this._event.params || {})
    }

    const service = new ReleaseService({
      origin: this._event.params.fromOrigin
    })
    const res = await service.getCount(where)
    return res
  }

  async create() {
    const service = new ReleaseService({
      origin: this._event.params.fromOrigin
    })
    const params = Object.assign({}, this._event.params, {
      OPENID: this._openId
    })
    const res = await service.create(params)
    if (res) {
      try {
        sendToWorkers(res, this._event.params.fromOrigin)
      } catch (error) {}
    }
    return res
  }

  async update() {
    const service = new ReleaseService({
      origin: this._event.params.fromOrigin
    })
    const res = await service.update(this._event.params)
    return res
  }

  async delete() {
    const service = new ReleaseService({
      origin: this._event.params.fromOrigin
    })
    const res = await service.delete(this._event.params)
    return res
  }
}

module.exports = ReleaseController
