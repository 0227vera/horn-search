import guid from '../utils'
export const fileUpload = filePath => wx.cloud.uploadFile({
  cloudPath: guid(),
  filePath
})
