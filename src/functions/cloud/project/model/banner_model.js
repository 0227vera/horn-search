const BaseModel = require('./base_model.js');

class BannerModel extends BaseModel {

}

// 集合名
BannerModel.CL = "shoe_washing_home_banner"

BannerModel.DB_STRUCTURE = {
  _pid: 'string|true',
  url: 'string|false',
  type: 'string|false',
  imgUrl: 'string|true',
  name: 'string|true',
  Banner_ID: 'string|true',
  Banner_ADD_TIME: 'int|false',
  Banner_EDIT_TIME: 'int|false',
  Banner_ADD_IP: 'string|false',
  Banner_EDIT_IP: 'string|false'
}

// 字段前缀
BannerModel.FIELD_PREFIX = "Banner_"

module.exports = BannerModel
