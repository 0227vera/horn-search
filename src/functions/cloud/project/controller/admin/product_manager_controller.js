const BaseAdminController = require('./base_admin_controller.js')
const ProductManagerService = require('../../service/admin/product_manager_service.js')

class ProductManagerController extends BaseAdminController {
  async getList() {
    const service = new ProductManagerService()
    const res = await service.getList()
    return res
  }

  async addProductItem() {
    const service = new ProductManagerService()
    const res = await service.addProductItem(this._event.params)
    return res
  }

  async updateProductItem() {
    const service = new ProductManagerService()
    const res = await service.updateProductItem(this._event.params)
    return res
  }

  async deleteProductItem() {
    const service = new ProductManagerService()
    const res = await service.deleteProductItem(this._event.params)
    return res
  }
}

module.exports = ProductManagerController
