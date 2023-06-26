const config = require('../../config/config.js')
// 初始化云实例，参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/init.html#%E4%BA%91%E5%87%BD%E6%95%B0%E7%AB%AF%E5%88%9D%E5%A7%8B%E5%8C%96
function getCloud() {
  const cloud = require('wx-server-sdk')
  cloud.init({
    env: config.CLOUD_ID
  })
  return cloud
}
module.exports = {
  getCloud
}
