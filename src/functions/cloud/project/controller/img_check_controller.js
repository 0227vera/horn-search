const BaseController = require('./base_controller.js')
const contentCheck = require('../../framework/validate/content_check.js')

class ImgCheckController extends BaseController {
  async checkImg() {
    const { url, type } = this._event.params
    return await contentCheck.checkImg(url, type)
  }
}

module.exports = ImgCheckController
