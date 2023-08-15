export default {
  worker: {
    list: [{
      name: '首页',
      key: 'home',
      isShowFooter: true,
      icon: 'wap-home'
    }, {
      name: '我的',
      key: 'owner',
      icon: 'friends',
      isShowFooter: true
    }],
    currentkey: 'home',
    isShow: 'expend'
  },
  boss: {
    list: [{
      name: '首页',
      key: 'home',
      isShowFooter: true,
      icon: 'wap-home',
      dot: true
    }, {
      name: '订单详情',
      key: 'order',
      icon: 'comment',
      isShowFooter: true
    }, {
      name: '我的',
      key: 'owner',
      icon: 'friends',
      info: null,
      isShowFooter: true
    }],
    currentkey: 'home',
    isShow: 'expend'
  },
  business: {
    list: [{
      name: '首页',
      key: 'home',
      isShowFooter: true,
      icon: 'wap-home'
    }, {
      name: '我的',
      key: 'owner',
      icon: 'friends',
      isShowFooter: true
    }],
    currentkey: 'home',
    isShow: 'expend'
  }
}
