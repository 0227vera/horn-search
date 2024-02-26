export default [[{
  // text: '工厂招工发布',
  text: '我要招工',
  id: 'findWorker',
  sort: 1,
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
  text: '急招',
  id: 'findJob',
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
  text: '我要找加工厂',
  id: '',
  sort: 2,
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
  text: '裁片外发',
  id: '',
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
  text: '出租转让发布',
  id: '',
  sort: 3,
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
  text: '厂房转让',
  id: '',
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
//   id: '',
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
//   id: '',
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
  text: '我要转让设备',
  sort: 5,
  id: '',
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
  text: '二手设备',
  id: '',
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
  text: '我要处理尾货',
  sort: 6,
  id: '',
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
  text: '找货尾',
  id: '',
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
