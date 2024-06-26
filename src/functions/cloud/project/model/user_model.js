const BaseModel = require('./base_model.js');

class AddressModel extends BaseModel {

}

// 集合名
AddressModel.CL = "warrior_user"

AddressModel.DB_STRUCTURE = {
  _pid: 'string|true',
  role: 'string|false',
  address: 'array|false',
  company: 'string|false',
  biographical: 'object|false',
  userInfo: 'object|false',
  companyInfo: 'object|false',
  noticeTems: 'array|false',
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
