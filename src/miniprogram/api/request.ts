const request = ({ route = '', params = {} } = {}) => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: 'cloud',
      data: {
        route,
        params
      }
    }).then(res => {
      resolve(res.result)
    }).catch(err => {
      reject(err)
    })
  })
}

export default request
