const BaseModel = require('./base_model.js');

class ClassModel extends BaseModel {

}

// 集合名
ClassModel.CL = "shoe_washing_class"

ClassModel.DB_STRUCTURE = {
  _pid: 'string|true',
  name: 'string|true',
  CLASS_ID: 'string|true',
  CLASS_ADD_TIME: 'int|false',
  CLASS_EDIT_TIME: 'int|false',
  CLASS_ADD_IP: 'string|false',
  CLASS_EDIT_IP: 'string|false'
}

// 字段前缀
ClassModel.FIELD_PREFIX = "CLASS_"

module.exports = ClassModel
