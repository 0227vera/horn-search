const BaseService = require('../base_service.js')
const BannerModel = require('../../model/banner_model.js')

class BannerManagerService extends BaseService {
  async getList() {
    let where = {}
    let res = await BannerModel.getList(where)
    return res
  }

  async addBannerItem(data = {}) {
    const res = await BannerModel.insert(data)
    return res
  }

  async updateBannerItem(data = {}) {
    const { _id, ...newData } = data
    const res = await BannerModel.insertOrUpdate({ _id }, newData)
    return res
  }

  async deleteBannerItem(data = {}) {
    const res = await BannerModel.del({ _id: data._id })
    return res
  }
}

module.exports = BannerManagerService
