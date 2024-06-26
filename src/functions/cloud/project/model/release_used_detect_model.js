const BaseModel = require('./base_model.js');

class ReleaseModel extends BaseModel {

}

// 集合名
ReleaseModel.CL = "warrior_release_used_detect"

ReleaseModel.DB_STRUCTURE = {
  _pid: 'string|true',
  category: 'string|true',
  categoryName: 'string|true',
  categorySub: 'string|false',
  status: 'string|true',
  calllist: 'array|false',
  readlist: 'array|false',
  price: 'int|false',
  poi: 'object|true',
  location: 'geopoint|true',
  unit: 'string|false',
  num: 'string|false',
  tel: 'string|true',
  images: 'array|true',
  note: 'string|false',
  OPENID: 'string|true',
  RELEASE_ID: 'string|true',
  RELEASE_ADD_TIME: 'int|false',
  RELEASE_EDIT_TIME: 'int|false',
  RELEASE_ADD_IP: 'string|false',
  RELEASE_EDIT_IP: 'string|false'
}

// 字段前缀
ReleaseModel.FIELD_PREFIX = "RELEASE_"

module.exports = ReleaseModel
