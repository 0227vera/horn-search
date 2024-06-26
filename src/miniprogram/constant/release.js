// note: 工作相关的的分类
const findWorkerCategory = [
  {
    text: '车间生产类',
    id: '1-',
    children: [
      { text: "裁工师傅/主裁", id: "1-0", showCategoryType: true },
      { text: "电剪/副裁", id: "1-3", showCategoryType: true },
      { text: "拉布", id: "1-6", showCategoryType: true },
      { text: "大烫", id: "1-9", showCategoryType: true },
      { text: "中烫", id: "1-12", showCategoryType: true },
      { text: "尾部", id: "1-13", showCategoryType: true, categoryType: '2' },
      { text: "剪线", id: "1-15", showCategoryType: true },
      { text: "包装", id: "1-18", showCategoryType: true },
      { text: "车位", id: "1-19", showCategoryType: true },
      { text: "成件车位", id: "1-21", showCategoryType: true },
      { text: "四线", id: "1-24", showCategoryType: true },
      { text: "五线", id: "1-25", showCategoryType: true },
      { text: "平车", id: "1-27", showCategoryType: true },
      { text: "冚车", id: "1-30", showCategoryType: true },
      { text: "卷边", id: "1-33", showCategoryType: true },
      { text: "做领上领", id: "1-36", showCategoryType: true },
      { text: "上腰", id: "1-39", showCategoryType: true },
      { text: "包腰", id: "1-40", showCategoryType: true },
      { text: "拉筒", id: "1-41", showCategoryType: true },
      { text: "车门筒", id: "1-42", showCategoryType: true },
      { text: "车口袋", id: "1-45", showCategoryType: true },
      { text: "上拉链", id: "1-46", showCategoryType: true },
      { text: "返工", id: "1-46", showCategoryType: true },
      { text: "模板绗线", id: "1-48", showCategoryType: true },
      { text: "塞棉/拍棉", id: "1-51", showCategoryType: true },
      { text: "手工类", id: "1-54", showCategoryType: true, needDetail: true },
      { text: "专机类", id: "1-57", showCategoryType: true, needDetail: true },
      { text: "指导工/工艺", id: "1-60", showCategoryType: true, categoryType: '2' },
      { text: "打包发货", id: "1-62", showCategoryType: true, categoryType: '2' },
      { text: "收发", id: "1-63", showCategoryType: true, categoryType: '2' },
      { text: "跟单", id: "1-66", showCategoryType: true, categoryType: '2' },
      { text: "仓管", id: "1-69", showCategoryType: true, categoryType: '2' },
      { text: "验布", id: "1-72", showCategoryType: true, categoryType: '2' },
      { text: "做饭工", id: "1-75", showCategoryType: true, categoryType: '2' },
      { text: "杂工", id: "1-78", showCategoryType: true, categoryType: '2' },
      { text: "其他", id: "1-81", showCategoryType: true, categoryType: '2', needDetail: true }
    ]
  },
  {
    text: '打版车版类',
    id: '2-',
    children: [
      { text: "纸样师/打版师", id: "3-0", showCategoryType: true, categoryType: '2' },
      { text: "车版师/样衣工", id: "3-3", showCategoryType: true, categoryType: '2' },
      { text: "打版兼车版", id: "3-12", showCategoryType: true, categoryType: '2' },
      { text: "核价师", id: "3-15", showCategoryType: true, categoryType: '2' },
      { text: "放码员", id: "3-6", showCategoryType: true, categoryType: '2' },
      { text: "唛架师", id: "3-9", showCategoryType: true, categoryType: '2' },
      { text: "纸样学徒", id: "3-18", showCategoryType: true, categoryType: '2' }
    ]
  },
  {
    text: '工厂管理类',
    id: '3-',
    children: [
      { text: "厂长/主管", id: "6-0", showCategoryType: true, categoryType: '2' },
      { text: "裁床主管", id: "6-3", showCategoryType: true, categoryType: '2' },
      { text: "车间师傅", id: "6-6", showCategoryType: true, categoryType: '2' },
      { text: "尾部主管", id: "6-9", showCategoryType: true, categoryType: '2' },
      { text: "设计总监", id: "6-12", showCategoryType: true, categoryType: '2' },
      { text: "版房主管", id: "6-15", showCategoryType: true, categoryType: '2' },
      { text: "质检主管", id: "6-18", showCategoryType: true, categoryType: '2' },
      { text: "外发主管", id: "6-21", showCategoryType: true, categoryType: '2' },
      { text: "跟单主管", id: "6-24", showCategoryType: true, categoryType: '2' },
      { text: "经理(总监)", id: "6-27", showCategoryType: true, categoryType: '2' },
      { text: "设计总监", id: "6-30", showCategoryType: true, categoryType: '2' }
    ]
  },
  {
    text: '设计开发类',
    id: '4-',
    children: [
      { text: "男装设计师", id: "9-0", showCategoryType: true, categoryType: '2' },
      { text: "女装设计师", id: "9-3", showCategoryType: true, categoryType: '2' },
      { text: "童装设计师", id: "9-4", showCategoryType: true, categoryType: '2' },
      { text: "男裤设计师", id: "9-6", showCategoryType: true, categoryType: '2' },
      { text: "女裤设计师", id: "9-9", showCategoryType: true, categoryType: '2' },
      { text: "毛织设计师", id: "9-12", showCategoryType: true, categoryType: '2' },
      { text: "牛仔设计师", id: "9-15", showCategoryType: true, categoryType: '2' },
      { text: "婚纱/礼服设计师", id: "9-18", showCategoryType: true, categoryType: '2' },
      { text: "家居/内衣设计师", id: "9-21", showCategoryType: true, categoryType: '2' },
      { text: "瑜珈服设计师 ", id: "9-24", showCategoryType: true, categoryType: '2' }
    ]
  }
]
// note: 工厂相关的分类
const cooperTypeList = [{
  name: '包工包料',
  value: 'a1'
}, {
  name: '来料加工',
  value: 'a2'
}, {
  name: '裁片外发',
  value: 'a3',
  showAddress: true
}, {
  name: '开发生产供应商',
  value: 'a4'
}]

const usedDetectCategory = [{
  text: '设备类',
  children: [
    { text: "货架", id: "1-0", unit: '个' },
    { text: "电脑", id: "1-3", unit: '台' },
    { text: "模特(含卓天商务模特)", id: "1-6", unit: '个' },
    { text: "四线", id: "1-9", unit: '台' },
    { text: "五线", id: "1-12", unit: '台' },
    { text: "冚车", id: "1-15", unit: '台' },
    { text: "模板绗棉车", id: "1-18", unit: '台' },
    { text: "专机机器", id: "1-21", unit: '台' },
    { text: "唛架机", id: "1-24", unit: '个' },
    { text: "烫炉/烫台", id: "1-27", unit: '台' },
    { text: "凤眼机", id: "1-30", unit: '台' },
    { text: "打揽机", id: "1-33", unit: '台' }
  ]
}, {
  text: '生活类',
  children: [
    { text: "电动车", id: "2-0", unit: '台' },
    { text: "冰箱", id: "2-3", unit: '台' },
    { text: "洗衣机", id: "2-6", unit: '个' },
    { text: "空调", id: "2-9", unit: '台' }
  ]
}]

const usedDetectList = [
  { name: "货架", value: "1-0", unit: '个' },
  { name: "电脑", value: "1-3", unit: '台' },
  { name: "模特(含卓天商务模特)", value: "1-6", unit: '个' },
  { name: "四线", value: "1-9", unit: '台' },
  { name: "五线", value: "1-12", unit: '台' },
  { name: "冚车", value: "1-15", unit: '台' },
  { name: "模板绗棉车", value: "1-18", unit: '台' },
  { name: "专机机器", value: "1-21", unit: '台', needDetail: true },
  { name: "唛架机", value: "1-24", unit: '个' },
  { name: "烫炉/烫台", value: "1-27", unit: '台' },
  { name: "凤眼机", value: "1-30", unit: '台' },
  { name: "打揽机", value: "1-33", unit: '台' },
  { name: "电动车", value: "2-0", unit: '台' },
  { name: "冰箱", value: "2-3", unit: '台' },
  { name: "洗衣机", value: "2-6", unit: '个' },
  { name: "空调", value: "2-9", unit: '台' }
]

const fabricPropList = [{
  name: '针织',
  value: 'b1'
}, {
  name: '梭织',
  value: 'b2'
}, {
  name: '毛织',
  value: 'b3'
}, {
  name: '卫衣',
  value: 'b4'
}, {
  name: '牛仔',
  value: 'b5'
}, {
  name: '雪纺/真丝',
  value: 'b6'
}, {
  name: '蕾丝/网纱',
  value: 'b7'
}, {
  name: '毛呢',
  value: 'b8'
}, {
  name: '毛毛料',
  value: 'b9'
}, {
  name: '皮革料',
  value: 'b10'
}, {
  name: '毛毛料',
  value: 'b11'
}, {
  name: '水洗料',
  value: 'b12'
}, {
  name: '灯芯绒',
  value: 'b13'
}]

const productTypeList = [{
  name: '全品类',
  value: 'c0'
}, {
  name: '上衣',
  value: 'c101'
}, {
  name: 'T恤',
  value: 'c1'
}, {
  name: '小衫',
  value: 'c2'
}, {
  name: '衬衣',
  value: 'c3'
}, {
  name: '连衣裙',
  value: 'c4'
}, {
  name: '裤子',
  value: 'c5'
}, {
  name: '工装裤',
  value: 'c505'
}, {
  name: '短裤',
  value: 'c506'
}, {
  name: '裙子',
  value: 'c6'
}, {
  name: '连体裤',
  value: 'c7'
}, {
  name: '外套',
  value: 'c8'
}, {
  name: '套装',
  value: 'c9'
}, {
  name: '两件套',
  value: 'c10'
}, {
  name: '毛毛衣',
  value: 'c11'
}, {
  name: '马夹',
  value: 'c12'
}, {
  name: '羽绒服/棉服',
  value: 'c13'
}, {
  name: '羽绒裤/棉裤',
  value: 'c14'
}, {
  name: '童装',
  value: 'c15'
}, {
  name: '男装',
  value: 'c16'
}]

const orderTypeList = [{
  name: '十三行单',
  value: 'd0'
}, {
  name: '档口货',
  value: 'd1'
}, {
  name: '网档单',
  value: 'd2'
}, {
  name: '电商单',
  value: 'd3'
}, {
  name: '直播单',
  value: 'd4'
}, {
  name: '公司单',
  value: 'd5'
}, {
  name: '拼多多单',
  value: 'd6'
}, {
  name: '卓天商务单',
  value: 'd7'
}, {
  name: 'Temu单',
  value: 'd8'
}, {
  name: '跨境电商单',
  value: 'd9'
}, {
  name: '外单',
  value: 'd10'
}]

const factoryScaleList = [{
  name: '工厂',
  value: 'e1'
}, {
  name: '作坊',
  value: 'e2'
}]

const leaseTransferCategory = [{
  text: '转让',
  children: [
    { text: "厂房转让", id: "2-0", showDevice: true, labelDevice: '设备' },
    { text: "作坊转让", id: "2-1", showDevice: true, labelDevice: '设备' },
    { text: "一楼厂房转让", id: "2-3", showDevice: true, labelDevice: '设备' },
    { text: "二楼厂房转让", id: "2-6", showDevice: true, labelDevice: '设备' },
    { text: "裁房转让", id: "2-9", showDevice: true, labelDevice: '设备' },
    { text: "烫房转让", id: "2-12", showDevice: true, labelDevice: '设备' },
    { text: "专机店转让", id: "2-15", showDevice: true, labelDevice: '设备' },
    { text: "仓库转让", id: "2-18", showDevice: false, labelDevice: '设备' },
    { text: "烫房转让", id: "2-21", showDevice: true, labelDevice: '设备' },
    { text: "住房转让", id: "2-24", showDevice: true, isZhufang: true, labelDevice: '家具电器' },
    { text: "旺铺转让", id: "2-27", showDevice: false, labelDevice: '设备' },
    { text: "小餐饮店转让", id: "2-30", showDevice: false, labelDevice: '设备' },
    { text: "餐馆转让", id: "2-33", showDevice: false, labelDevice: '设备' },
    { text: "服装公司/写字楼转让", id: "2-36", showDevice: false, labelDevice: '设备' }
  ]
}, {
  text: '招租',
  children: [
    { text: "厂房招租", id: "1-0" },
    { text: "公司/写字楼招租", id: "1-3" },
    { text: "直播间招租", id: "1-6" },
    { text: "店铺招租", id: "1-9" },
    { text: "仓库招租", id: "1-12" },
    {
      text: "房屋出租",
      id: "1-15",
      needDetail: true,
      isZhufang: true,
      showDevice: true,
      labelDevice: '家具电器',
      subCategoryInfo: {
        label: '房型',
        placeholder: '请点击选择具体房型',
        radioList: [{
          name: '单房',
          value: 'f1'
        }, {
          name: '大单房',
          value: 'f2'
        }, {
          name: '一房一厅',
          value: 'f3'
        }, {
          name: '两房一厅',
          value: 'f4'
        }, {
          name: '三房一厅',
          value: 'f5'
        }, {
          name: '三房两厅',
          value: 'f6'
        }]
      },
      useInfo: {
        label: '用途',
        placeholder: '请点击选择房屋用途',
        radioList: [{
          name: '可制衣',
          value: 'g1'
        }, {
          name: '不可制衣',
          value: 'g2'
        }]
      }
    },
    { text: "公寓招租", isZhufang: true, labelDevice: '家具电器', id: "1-18" }
  ]
}]

const workerFilter = findWorkerCategory.map((item, index) => {
  return {
    type: 'radio',
    id: `category${index}`,
    text: item.text,
    initText: item.text,
    activeList: [],
    list: item.children.map(m => ({
      name: m.text,
      value: m.id
    }))
  }
})

// [{
//   type: 'category',
//   id: 'category',
//   text: '岗位筛选',
//   initText: '岗位筛选',
//   value: [],
//   activeList: [],
//   list: findWorkerCategory,
//   max: 3
// }]
// , {
//   type: 'dropdown',
//   id: 'distance',
//   text: '距离筛选',
//   initText: '距离筛选',
//   activeList: [],
//   value: [0, 100]
// }

const factoryFilter = [{
  type: 'radio',
  id: 'factoryScale',
  text: '工厂规模筛选',
  initText: '工厂规模筛选',
  value: [],
  activeList: [],
  list: factoryScaleList
}, {
  type: 'checkbox',
  id: 'productType',
  text: '产品类型筛选',
  initText: '产品类型筛选',
  value: [],
  activeList: [],
  list: productTypeList
}, {
  type: 'like',
  id: 'area',
  text: '地域要求筛选',
  initText: '地域要求筛选',
  placeholder: '输入地域可筛选',
  label: '地域要求',
  tips: '将为您筛选所输入的地域',
  value: '',
  activeList: []
}, {
  type: 'checkbox',
  id: 'cooperType',
  text: '合作类型筛选',
  initText: '合作类型筛选',
  value: [],
  activeList: [],
  list: cooperTypeList
}, {
  type: 'checkbox',
  id: 'fabricProp',
  text: '面料属性筛选',
  initText: '面料属性筛选',
  value: [],
  activeList: [],
  list: fabricPropList
}, {
  type: 'checkbox',
  id: 'orderType',
  text: '货源筛选',
  initText: '货源筛选',
  value: [],
  activeList: [],
  list: orderTypeList
}]

const leaseTransferFilter = [{
  type: 'category',
  id: 'category',
  text: '类型筛选',
  initText: '类型筛选',
  value: [],
  activeList: [],
  list: leaseTransferCategory,
  max: 3
}, {
  type: 'range',
  id: 'merge',
  mergeList: [{
    label: '面积：',
    id: 'area',
    unit: '平米',
    placeholder: ['最小', '最大'],
    value: {
      min: '',
      max: ''
    }
  }, {
    label: '楼层：',
    id: 'floor',
    unit: '楼',
    placeholder: ['最低', '最高'],
    value: {
      min: '',
      max: ''
    }
  }],
  text: '面积楼层筛选',
  initText: '面积楼层筛选',
  value: [],
  activeList: []
}]

const usedDetectFilter = [{
  type: 'category',
  id: 'category',
  text: '设备名称筛选',
  initText: '设备名称筛选',
  value: [],
  activeList: [],
  list: usedDetectCategory,
  max: 3
}, {
  type: 'range',
  id: 'merge',
  mergeList: [{
    label: '价格：',
    id: 'price',
    unit: '元',
    placeholder: ['最少', '最多'],
    value: {
      min: '',
      max: ''
    }
  }],
  text: '价格筛选',
  initText: '价格筛选',
  value: [],
  activeList: []
}]

const tailingsList = [{
  name: '面料',
  value: '1'
}, {
  name: '衣服',
  value: '2'
}, {
  name: '辅料',
  value: '3',
  needDetail: true
}]

const tailingsFilter = [{
  type: 'radio',
  id: 'category',
  text: '货品类别筛选',
  initText: '货品类别筛选',
  value: [],
  activeList: [],
  list: tailingsList
}]

export default {
  // note: 招工
  findWorker: {
    category: findWorkerCategory,
    filterList: workerFilter,
    fromOrigin: 'bossWorker',
    partyA: {
      fristTab: '发布招工信息',
      title: ['我要招工', '我的招工列表']
    },
    partyB: {
      title: '我要找事做',
      bottom: {
        title: '主动求职',
        desc: '填写个人信息、技能，平台将为您智能匹配到对应的招工方',
        btn: {
          icon: 'arrow',
          id: 'gotoUserInfo',
          tips: ['精准为您推送'],
          name: '去发布',
          jumptype: 'mp',
          link: '/person-center/pages/person-info'
        }
      }
    }
  },
  // note: 工厂合作
  findFactory: {
    factoryScaleList,
    cooperTypeList,
    fabricPropList,
    productTypeList,
    orderTypeList,
    filterList: factoryFilter,
    fromOrigin: 'factoryCooper',
    partyA: {
      fristTab: '发布工厂合作信息',
      title: ['我要找工厂', '我的找工厂列表', '优质工厂推荐'],
      extraCom: 'company-list'
    },
    partyB: {
      title: '我要找货做',
      bottom: {
        title: '诚寻客户',
        desc: '发布诚寻客户,平台将您的工厂推荐给所有找加工厂的客户',
        btn: {
          icon: 'arrow',
          id: 'gotoCompanyInfo',
          tips: ['精准为您推送'],
          name: '去发布',
          jumptype: 'mp',
          link: '/person-center/pages/company-info'
        }
      }
    }
  },
  // note: 出租转让
  leaseTransfer: {
    category: leaseTransferCategory,
    filterList: leaseTransferFilter,
    fromOrigin: 'leaseTransfer',
    partyA: {
      fristTab: '发布出租转让信息',
      title: ['出租转让', '我的出租转让列表']
    },
    partyB: {
      title: '租房'
    }
  },
  // note: 公司直聘
  // employ: {
  //   fromOrigin: 'employAppli',
  //   filterList: [],
  //   partyA: {
  //     title: ['公司直聘', '直聘列表']
  //   },
  //   partyB: {
  //     title: '应聘公司岗'
  //   }
  // },
  // note: 二手设备
  usedDetect: {
    fromOrigin: 'usedDetect',
    category: usedDetectCategory,
    list: usedDetectList,
    filterList: usedDetectFilter,
    partyA: {
      fristTab: '发布二手设备信息',
      title: ['出售二手设备', '我的二手设备列表']
    },
    partyB: {
      title: '我要捡漏二手没备'
    }
  },
  // note: 尾货处理
  tailings: {
    fromOrigin: 'tailings',
    category: tailingsList,
    filterList: tailingsFilter,
    partyA: {
      fristTab: '发布尾货处理信息',
      title: ['尾货处理', '我的尾货处理列表']
    },
    partyB: {
      title: '货尾中心'
    }
  }
}

export const categoryMap = {
  findWorker: 'findWorker',
  findJob: 'findWorker',
  findFactory: 'findFactory',
  findCooper: 'findFactory',
  hire: 'leaseTransfer',
  rent: 'leaseTransfer',
  employment: 'employ',
  application: 'employ',
  used: 'usedDetect',
  detect: 'usedDetect',
  tailings: 'tailings',
  center: 'tailings'
}
