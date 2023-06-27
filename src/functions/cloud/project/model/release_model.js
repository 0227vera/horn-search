const BaseModel = require('./base_model.js');

class AddressModel extends BaseModel {

}

// 集合名
AddressModel.CL = "shoe_washing_release"

AddressModel.DB_STRUCTURE = {
  _pid: 'string|true',
  category: 'string|true',
  price: 'string|true',
  poi: 'object|true',
  tel: 'string|true',
  ownTime: 'int|false',
  images: 'array|false',
  note: 'string|false',
  OPENID: 'string|true',
  RELEASE_ID: 'string|true',
  RELEASE_ADD_TIME: 'int|false',
  RELEASE_EDIT_TIME: 'int|false',
  RELEASE_ADD_IP: 'string|false',
  RELEASE_EDIT_IP: 'string|false'
}

// 字段前缀
AddressModel.FIELD_PREFIX = "RELEASE_"

module.exports = AddressModel
