const BaseAdminController = require('./base_controller')
const AddressManagerService = require('../service/address_service.js')

class AddressManagerController extends BaseAdminController {
  async getList() {
    const service = new AddressManagerService()
    const res = await service.getList()
    return res
  }

  async create() {
    const service = new AddressManagerService()
    const res = await service.create(this._event.params)
    return res
  }

  async update() {
    const service = new AddressManagerService()
    const res = await service.update(this._event.params)
    return res
  }

  async delete() {
    const service = new AddressManagerService()
    const res = await service.delete(this._event.params)
    return res
  }
}

module.exports = AddressManagerController
