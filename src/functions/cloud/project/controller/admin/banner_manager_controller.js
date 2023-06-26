const BaseAdminController = require('./base_admin_controller.js')
const BannerManagerService = require('../../service/admin/banner_manager_service.js')

class BannerManagerController extends BaseAdminController {
  async getList() {
    const service = new BannerManagerService()
    const res = await service.getList()
    return res
  }

  async addBannerItem() {
    const service = new BannerManagerService()
    const res = await service.addBannerItem(this._event.params)
    return res
  }

  async updateBannerItem() {
    const service = new BannerManagerService()
    const res = await service.updateBannerItem(this._event.params)
    return res
  }

  async deleteBannerItem() {
    const service = new BannerManagerService()
    const res = await service.deleteBannerItem(this._event.params)
    return res
  }
}

module.exports = BannerManagerController
