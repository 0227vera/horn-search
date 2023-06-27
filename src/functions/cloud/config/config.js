const Collection_Field_Prefix = 'shoe_washing_'

module.exports = {

  // ### 环境相关
  CLOUD_ID: 'cloud1-0gfibr1283141-0b78337d158', // 你的云环境id

  // ##################################################################
  PID: 'A00',

  COLLECTION_NAME: `${Collection_Field_Prefix}admin|${Collection_Field_Prefix}class|${Collection_Field_Prefix}product|${Collection_Field_Prefix}home_banner|${Collection_Field_Prefix}home_diff|${Collection_Field_Prefix}article|${Collection_Field_Prefix}order|${Collection_Field_Prefix}us|${Collection_Field_Prefix}user|${Collection_Field_Prefix}log|${Collection_Field_Prefix}address|${Collection_Field_Prefix}release`,

  // ## 缓存相关
  IS_CACHE: true, // 是否开启缓存

  // #### 内容安全
  CLIENT_CHECK_CONTENT: false, // 前台图片文字是否校验
  ADMIN_CHECK_CONTENT: false, // 后台图片文字是否校验

  // note: 数据库集合前缀

  FIELD_PREFIX: Collection_Field_Prefix,

  // ### 后台业务相关
  ADMIN_LOGIN_EXPIRE: 86400 // 管理员token过期时间 (秒)
}
