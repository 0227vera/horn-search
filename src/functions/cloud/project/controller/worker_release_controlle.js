const BaseController = require('./base_controller')
const WorkerReleaseService = require('../service/worker_release_service.js')
const { sendToWorkers } = require('../../framework/utils/notice_util.js')

class WorkerReleaseController extends BaseController {
  async getList() {
    const where = {}
    const { needOpenid, ...newParams } = this._event.params || {}
    if (needOpenid) {
      Object.assign(where, {
        OPENID: this._openId
      })
    }
    Object.assign(where, newParams || {})
    const service = new WorkerReleaseService()
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
    const service = new WorkerReleaseService()
    const res = await service.getOne(where)
    return res
  }

  async create() {
    const service = new WorkerReleaseService()
    const params = Object.assign({}, this._event.params, {
      OPENID: this._openId
    })
    const res = await service.create(params)
    // if (res) {
    //   sendToWorkers(res)
    // }
    return res
  }

  async update() {
    const service = new WorkerReleaseService()
    const res = await service.update(this._event.params)
    return res
  }

  async delete() {
    const service = new WorkerReleaseService()
    const res = await service.delete(this._event.params)
    return res
  }
}

module.exports = WorkerReleaseController
