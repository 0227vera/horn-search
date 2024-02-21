const Warrior_Prefix = 'warrior_'

module.exports = {
  // ### 环境相关
  CLOUD_ID: 'prod-horn-search-6f0zg662fe589c3', // 你的云环境id
  // ##################################################################
  PID: 'A00',
  COLLECTION_NAME: [
    'warrior_admin', // node: 管理员信息
    'warrior_company', // node: 公司信息
    'warrior_user', // 用户管理: 包括角色、地址信息
    'warrior_log', // node: 日志信息
    'warrior_release_boss_worker', // 工厂招工
    'warrior_release_factory_cooper', // 工厂找合作
    'warrior_release_lease_transfer', // 出租转让
    'warrior_release_employ_appli', // 公司直聘
    'warrior_release_used_detect', // 二手设备
    'warrior_release_tailings', // 尾货
    'warrior_constant' // node: 常量配置
  ],
  // ## 缓存相关
  IS_CACHE: true, // 是否开启缓存
  // #### 内容安全
  CLIENT_CHECK_CONTENT: false, // 前台图片文字是否校验
  ADMIN_CHECK_CONTENT: false, // 后台图片文字是否校验
  // note: 数据库集合前缀
  FIELD_PREFIX: Warrior_Prefix,
  // ### 后台业务相关
  ADMIN_LOGIN_EXPIRE: 86400 // 管理员token过期时间 (秒)
}
