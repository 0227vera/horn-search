const BaseService = require('../base_service.js')
const ContactModel = require('../../model/contact_model.js')

class ContactManagerService extends BaseService {
  async getList() {
    let where = {}
    let res = await ContactModel.getList(where)
    return res
  }

  async updateContactItem(data = {}) {
    const { _id, ...newData } = data
    const where = _id ? { _id } : {}
    const res = await ContactModel.insertOrUpdate(where, newData)
    return res
  }
}

module.exports = ContactManagerService
