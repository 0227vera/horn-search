const BaseModel = require('./base_model.js');

class AdminModel extends BaseModel {

}

// 集合名
AdminModel.CL = "shoe_washing_admin"

AdminModel.DB_STRUCTURE = {
  _pid: 'string|true',
  ADMIN_OPENID: 'string|true',
  ADMIN_ID: 'string|true',
  ADMIN_NAME: 'string|true',
  ADMIN_PHONE: 'string|true|comment=登录电话',
  ADMIN_LOGIN_CNT: 'int|true|default=0|comment=登录次数',
  ADMIN_LOGIN_TIME: 'int|true|default=0|comment=最后登录时间',
  ADMIN_ADD_TIME: 'int|true',
  ADMIN_EDIT_TIME: 'int|true',
  ADMIN_ADD_IP: 'string|false',
  ADMIN_EDIT_IP: 'string|false'
}

// 字段前缀
AdminModel.FIELD_PREFIX = "ADMIN_"

module.exports = AdminModel
