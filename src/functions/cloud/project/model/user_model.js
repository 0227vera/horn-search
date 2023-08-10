const BaseModel = require('./base_model.js');

class AddressModel extends BaseModel {

}

// 集合名
AddressModel.CL = "shoe_washing_user"

AddressModel.DB_STRUCTURE = {
  _pid: 'string|true',
  role: 'string|true',
  OPENID: 'string|true',
  USER_ID: 'string|true',
  USER_ADD_TIME: 'int|false',
  USER_EDIT_TIME: 'int|false',
  USER_ADD_IP: 'string|false',
  USER_EDIT_IP: 'string|false'
}

// 字段前缀
AddressModel.FIELD_PREFIX = "USER_"

module.exports = AddressModel
