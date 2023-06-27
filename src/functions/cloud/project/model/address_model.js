const BaseModel = require('./base_model.js');

class AddressModel extends BaseModel {

}

// 集合名
AddressModel.CL = "shoe_washing_address"

AddressModel.DB_STRUCTURE = {
  _pid: 'string|true',
  name: 'string|true',
  phone: 'string|true',
  address: 'object|true',
  OPENID: 'string|true',
  ADDRESS_ID: 'string|true',
  ADDRESS_ADD_TIME: 'int|false',
  ADDRESS_EDIT_TIME: 'int|false',
  ADDRESS_ADD_IP: 'string|false',
  ADDRESS_EDIT_IP: 'string|false'
}

// 字段前缀
AddressModel.FIELD_PREFIX = "ADDRESS_"

module.exports = AddressModel
