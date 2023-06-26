class Controller {
  constructor(route, openId, event) {
    this._route = route
    this._openId = openId
    this._event = event
    this._request = event.params
  }
  dev_log(obj, needLight = false) {
    needLight && console.log('-----------------')
    console.log(JSON.stringify(obj, 1, 2))
  }
}

module.exports = Controller
