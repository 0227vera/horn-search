const BaseModel = require('./base_model.js');

class ReleaseModel extends BaseModel {

}

// 集合名
ReleaseModel.CL = "warrior_release_tailings"

// category: '',
// categoryName: '',
// categorySub: '',
// poi: {},
// tel: '',
// images: [],
// times: [],
// note: ''

ReleaseModel.DB_STRUCTURE = {
  _pid: 'string|true',
  category: 'string|true',
  categoryName: 'string|true',
  categorySub: 'string|false',
  status: 'string|true',
  calllist: 'array|false',
  readlist: 'array|false',
  poi: 'object|true',
  location: 'geopoint|true',
  tel: 'string|true',
  images: 'array|false',
  note: 'string|false',
  noteValue: 'array|false',
  times: 'array|false',
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
