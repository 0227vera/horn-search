const BaseService = require('../base_service.js')
const ProductModel = require('../../model/product_model.js')

class ProductManagerService extends BaseService {
  async getList() {
    let where = {}
    let res = await ProductModel.getList(where)
    return res
  }

  async addProductItem(data = {}) {
    const res = await ProductModel.insert(data)
    return res
  }

  async updateProductItem(data = {}) {
    const { _id, ...newData } = data
    const res = await ProductModel.insertOrUpdate({ _id }, newData)
    return res
  }

  async deleteProductItem(data = {}) {
    const res = await ProductModel.del({ _id: data._id })
    return res
  }
}

module.exports = ProductManagerService
