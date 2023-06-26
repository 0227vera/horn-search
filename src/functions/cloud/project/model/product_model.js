const BaseModel = require('./base_model.js');

class ProductModel extends BaseModel {

}

// 集合名
ProductModel.CL = "shoe_washing_product"

ProductModel.DB_STRUCTURE = {
  _id: 'string|false',
  _pid: 'string|true',
  name: 'string|true',
  note: 'string|true',
  tag: 'string|true',
  belongclass: 'string|true',
  imgUrl: 'string|true',
  price: 'string|true',
  PRODUCT_ID: 'string|true',
  PRODUCT_ADD_TIME: 'int|false',
  PRODUCT_EDIT_TIME: 'int|false',
  PRODUCT_ADD_IP: 'string|false',
  PRODUCT_EDIT_IP: 'string|false'
}

// 字段前缀
ProductModel.FIELD_PREFIX = "PRODUCT_"

module.exports = ProductModel
