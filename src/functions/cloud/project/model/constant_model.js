const BaseModel = require('./base_model.js');

class AboutModel extends BaseModel {

}

// 集合名
AboutModel.CL = "warrior_constant"

AboutModel.DB_STRUCTURE = {
  _pid: 'string|true',
  json: 'object|false',
  CONSTANT_ID: 'string|true',
  CONSTANT_ADD_TIME: 'int|false',
  CONSTANT_EDIT_TIME: 'int|false',
  CONSTANT_ADD_IP: 'string|false',
  CONSTANT_EDIT_IP: 'string|false'
}

// 字段前缀
AboutModel.FIELD_PREFIX = "CONSTANT"

module.exports = AboutModel
