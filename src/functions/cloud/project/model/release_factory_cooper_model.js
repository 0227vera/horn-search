const BaseModel = require('./base_model.js');

class ReleaseModel extends BaseModel {

}

// 集合名
ReleaseModel.CL = "warrior_release_factory_cooper"

ReleaseModel.DB_STRUCTURE = {
  _pid: 'string|true',
  area: 'string|true',
  color: 'string|true',
  code: 'string|true',
  cooperType: 'string|true',
  cooperTypeName: 'string|true',
  orderType: 'string|true',
  orderTypeName: 'string|true',
  factoryScale: 'string|true',
  factoryScaleName: 'string|true',
  fabricProp: 'array|true',
  fabricPropName: 'string|true',
  productType: 'array|true',
  productTypeName: 'string|true',
  price: 'string|false',
  status: 'string|true',
  calllist: 'array|false',
  readlist: 'array|false',
  poi: 'object|true',
  tel: 'string|true',
  people: 'string|false',
  peopleMax: 'string|false',
  peopleMin: 'string|false',
  images: 'array|false',
  num: 'string|false',
  numMax: 'string|false',
  numMin: 'string|false',
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
