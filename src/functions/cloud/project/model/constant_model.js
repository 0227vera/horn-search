const BaseModel = require('./base_model.js');

class ConstantModel extends BaseModel {

}

// 集合名
ConstantModel.CL = "warrior_constant"

ConstantModel.DB_STRUCTURE = {
  _pid: 'string|true',
  categoryItems: 'object|true',
  steps: 'array|true',
  CONSTANT_ID: 'string|true',
  CONSTANT_ADD_TIME: 'int|false',
  CONSTANT_EDIT_TIME: 'int|false',
  CONSTANT_ADD_IP: 'string|false',
  CONSTANT_EDIT_IP: 'string|false'
}

// 字段前缀
ConstantModel.FIELD_PREFIX = "CONSTANT_"

module.exports = ConstantModel
