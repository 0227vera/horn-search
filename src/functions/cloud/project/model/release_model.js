const BaseModel = require('./base_model.js');

class ReleaseModel extends BaseModel {

}

// 集合名
ReleaseModel.CL = "warrior_release"

// {
//   category: '',
//   categoryType: '1',
//   categoryTypeName: '临工',
//   categoryName: '',
//   categorySub: '',
//   origin: '',
//   note: '',
//   price: '',
//   priceUnit: '1',
//   priceUnitName: '元/件',
//   tel: '',
//   ownTime: '',
//   ownTimeName: '',
//   images: [],
//   poi: {}
// }

ReleaseModel.DB_STRUCTURE = {
  _pid: 'string|true',
  category: 'string|true',
  categoryName: 'string|true',
  categoryType: 'string|false',
  categoryTypeName: 'string|false',
  categorySub: 'string|false',
  price: 'string|true',
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
  ownTime: 'int|false',
  ownTimeName: 'string|false',
  images: 'array|false',
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
