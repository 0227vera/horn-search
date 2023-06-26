function handlerOther(event) {
  let isOther = false
  if (!event) return {
    isOther,
    eventX: null
  }
  // 公众号事件处理
  if (event['FromUserName'] && event['MsgType']) {
    console.log('公众号事件处理')
    let ret = {
      route: 'oa/serve',
      params: event
    }
    return {
      isOther: true,
      eventX: ret
    }
  }
  return {
    isOther,
    eventX: event
  }
}

module.exports = {
  handlerOther
}
