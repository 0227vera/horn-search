export default [[{
  // text: '工厂招工发布',
  text: '去招工',
  desc: '点击填写所要招工的信息',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/1.1 招工.png',
  id: 'findWorker',
  dot: false,
  tips: '热门',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'bossWorker',
      id: 'findWorker',
      type: 'partyA'
    }
  },
  extraInfo: {}
}, {
  // text: '我要找事做',
  text: '招长工/临工信息公示',
  desc: '点击查找您想做的事',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/1.2 找工作.png',
  id: 'findJob',
  dot: false,
  tips: '需求大',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'partyB',
      id: 'findJob',
      type: 'partyB'
    }
  },
  extraInfo: {}
}], [{
  // text: '找工厂合作发布',
  text: '去找工厂合作',
  desc: '点击填写对工厂的要求',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/2.1 找合作.png',
  id: '',
  dot: false,
  tips: '诚信',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'factoryCooper',
      id: 'findFactory',
      type: 'partyA'
    }
  },
  extraInfo: {}
}, {
  // text: '我要找货做',
  text: '去找货做',
  desc: '点击查看有哪些合作需求',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/2.2 找货做.png',
  id: '',
  dot: false,
  tips: '海量货源',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'partyB',
      id: 'findCooper',
      type: 'partyB'
    }
  },
  extraInfo: {}
}], [{
  text: '去出租转让',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/3.1 转让.png',
  id: '',
  dot: false,
  tips: '长期有效',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'leaseTransfer',
      id: 'hire',
      type: 'partyA'
    }
  },
  extraInfo: {}
}, {
  // text: '出租转让公示',
  text: '去找房',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/3.2 转让公示.png',
  id: '',
  dot: false,
  tips: '',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'partyB',
      id: 'rent',
      type: 'partyB'
    }
  },
  extraInfo: {}
}],
// [{
//   text: '公司直聘发布',
//   icon: 'cloud://cloud1-0gfibr1283141-0b78337d158.636c-cloud1-0gfibr1283141-0b78337d158-1307055684/home-module-icon/4.1 直聘.png',
//   id: '',
//   dot: false,
//   tips: '',
//   action: {
//     url: '/superstream/pages/index',
//     jumptype: 'mp',
//     params: {
//       key: 'employAppli',
//       id: 'employment',
//       type: 'partyA'
//     }
//   },
//   extraInfo: {}
// }, {
//   text: '我要应聘公司岗',
//   icon: 'cloud://cloud1-0gfibr1283141-0b78337d158.636c-cloud1-0gfibr1283141-0b78337d158-1307055684/home-module-icon/4.2 应聘.png',
//   id: '',
//   dot: false,
//   tips: '靠谱',
//   action: {
//     url: '/superstream/pages/index',
//     jumptype: 'mp',
//     params: {
//       key: 'partyB',
//       id: 'application',
//       type: 'partyB'
//     }
//   },
//   extraInfo: {}
// }],
[{
  // text: '出售二手设备发布',
  text: '去出售二手设备',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/5.1 二手设备.png',
  id: '',
  dot: false,
  tips: '',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'usedDetect',
      id: 'used',
      type: 'partyA'
    }
  },
  extraInfo: {}
}, {
  // text: '我要捡漏二手没备',
  text: '去捡漏二手没备',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/5.2 捡漏.png',
  id: '',
  dot: false,
  tips: '聚划算',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'partyB',
      id: 'detect',
      type: 'partyB'
    }
  },
  extraInfo: {}
}], [{
  // text: '尾货处理发布',
  text: '去处理尾货',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/6.1 调仓.png',
  id: '',
  dot: false,
  tips: '清仓',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'tailings',
      id: 'tailings',
      type: 'partyA'
    }
  },
  extraInfo: {}
}, {
  // text: '货尾中心公示',
  text: '去找货尾',
  icon: 'cloud://cloud1-2ghfxje8f4990d8f.636c-cloud1-2ghfxje8f4990d8f-1322280819/home-icon/6.2 货运.png',
  id: '',
  dot: false,
  tips: '方便联系',
  action: {
    url: '/superstream/pages/index',
    jumptype: 'mp',
    params: {
      key: 'partyB',
      id: 'center',
      type: 'partyB'
    }
  },
  extraInfo: {}
}]]
