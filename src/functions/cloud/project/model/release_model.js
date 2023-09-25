const BaseModel = require('./base_model.js');

class ReleaseModel extends BaseModel {

}

// 集合名
ReleaseModel.CL = "warrior_release"

ReleaseModel.DB_STRUCTURE = {
  _pid: 'string|true',
  category: 'string|true',
  categoryName: 'string|true',
  categoryType: 'string|false',
  categoryTypeName: 'string|false',
  categorySub: 'string|false',
  categoryNum: 'string|false',
  price: 'string|true',
  priceMin: 'string|false',
  priceMax: 'string|false',
  priceUnit: 'string|true',
  priceUnitName: 'string|true',
  origin: 'string|false',
  status: 'string|true',
  subscribeInfo: 'object|false',
  calllist: 'array|false',
  readlist: 'array|false',
  poi: 'object|true',
  tel: 'string|true',
  num: 'int|false',
  numMax: 'int|false',
  numMin: 'int|false',
  ownTime: 'int|false',
  ownTimeName: 'string|false',
  images: 'array|false',
  note: 'string|false',
  add: 'string|false',
  company: 'string|false',
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
