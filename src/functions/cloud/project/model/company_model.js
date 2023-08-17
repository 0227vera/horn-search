const BaseModel = require('./base_model.js');

class AboutModel extends BaseModel {

}

// 集合名
AboutModel.CL = "warrior_company"

AboutModel.DB_STRUCTURE = {
  _pid: 'string|true',
  text: 'string|false',
  wechat: 'string|false',
  email: 'string|false',
  phone: 'string|false',
  COMPANY_ID: 'string|true',
  COMPANY_ADD_TIME: 'int|false',
  COMPANY_EDIT_TIME: 'int|false',
  COMPANY_ADD_IP: 'string|false',
  COMPANY_EDIT_IP: 'string|false'
}

// 字段前缀
AboutModel.FIELD_PREFIX = "COMPANY_"

module.exports = AboutModel
