import guid from '../utils'
import request from "./request"
export const fileUpload = filePath => {
  wx.showLoading({
    title: '图片上传中……'
  })
  return new Promise((resolve, reject) => {
    wx.cloud.uploadFile({
      cloudPath: guid(),
      filePath,
      success(res) {
        const { fileID } = res
        const type = filePath.split('.').pop()
        const params = {
          url: fileID,
          type
        }
        wx.showLoading({
          title: '图片检测中……'
        })
        request({ route: 'common/imgcheck', params }).then(data => {
          if (data.data.errCode === 0) {
            resolve(res)
          } else {
            wx.showToast({
              icon: 'none',
              title: data.msg || '图片检验未通过'
            })
            reject(res.msg)
          }
        }).catch(error => {
          wx.showToast({
            icon: 'none',
            title: '图片检验未通过'
          })
          reject(error)
        }).finally(() => {
          wx.hideLoading()
        })
      },
      fail(err) {
        wx.showToast({
          icon: 'none',
          title: '图片上传失败'
        })
        reject(err)
      }
    })
  })
}
