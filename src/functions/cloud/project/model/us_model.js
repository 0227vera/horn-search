const BaseModel = require('./base_model.js');

class AboutModel extends BaseModel {

}

// 集合名
AboutModel.CL = "shoe_washing_us"

AboutModel.DB_STRUCTURE = {
  _pid: 'string|true',
  text: 'string|false',
  wechat: 'string|false',
  email: 'string|false',
  phone: 'string|false',
  US_ID: 'string|true',
  US_ADD_TIME: 'int|false',
  US_EDIT_TIME: 'int|false',
  US_ADD_IP: 'string|false',
  US_EDIT_IP: 'string|false'
}

// 字段前缀
AboutModel.FIELD_PREFIX = "US_"

module.exports = AboutModel
