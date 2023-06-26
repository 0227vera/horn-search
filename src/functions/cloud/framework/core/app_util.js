const appCode = require('./app_code.js')

function handlerBasic(code, msg = '', data = {}) {
  switch (code) {
    case appCode.SUCC:
      msg = (msg) ? `${msg}:ok` : 'ok'
      break
    case appCode.SVR:
      msg = '服务器繁忙，请稍后再试'
      break
    case appCode.LOGIC:
      break
    case appCode.DATA:
      break
  }

  return { code, msg, data }
}

function handlerSvrErr(msg = '') {
  return handlerBasic(appCode.SVR, msg)
}

function handlerSucc(msg = '') {
  return handlerBasic(appCode.SUCC, msg)
}

function handlerAppErr(msg = '', code = appCode.LOGIC) {
  return handlerBasic(code, msg)
}

function handlerData(data, msg = '') {
  return handlerBasic(appCode.SUCC, msg, data)
}

module.exports = {
  handlerBasic,
  handlerData,
  handlerSucc,
  handlerSvrErr,
  handlerAppErr
}
