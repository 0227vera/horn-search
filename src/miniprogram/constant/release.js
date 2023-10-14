// note: 工作相关的的分类
const findWorkerCategory = [
  {
    text: '车间生产类',
    children: [
      { text: "主裁/师傅", id: "1-0", showCategoryType: true },
      { text: "电剪", id: "1-3", showCategoryType: true },
      { text: "拉布", id: "1-6", showCategoryType: true },
      { text: "大烫", id: "1-9", showCategoryType: true },
      { text: "中烫", id: "1-12", showCategoryType: true },
      { text: "剪线", id: "1-15", showCategoryType: true },
      { text: "包装", id: "1-18", showCategoryType: true },
      { text: "成件车位", id: "1-21", showCategoryType: true },
      { text: "四线/五线", id: "1-24", showCategoryType: true },
      { text: "平车", id: "1-27", showCategoryType: true },
      { text: "冚车", id: "1-30", showCategoryType: true },
      { text: "卷边", id: "1-33", showCategoryType: true },
      { text: "做领上领", id: "1-36", showCategoryType: true },
      { text: "上腰", id: "1-39", showCategoryType: true },
      { text: "车门筒", id: "1-42", showCategoryType: true },
      { text: "车口袋", id: "1-45", showCategoryType: true },
      { text: "模板绗线", id: "1-48", showCategoryType: true },
      { text: "塞棉/拍棉", id: "1-51", showCategoryType: true },
      { text: "手工类", id: "1-54", showCategoryType: true, needDetail: true },
      { text: "专机类", id: "1-57", showCategoryType: true, needDetail: true },
      { text: "指导工/工艺", id: "1-60", categoryType: '2' },
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
    children: [
      { text: "纸样师/打版师", id: "3-0", showCategoryType: true, categoryType: '2' },
      { text: "车版师/样衣工", id: "3-3", showCategoryType: true, categoryType: '2' },
      { text: "放码员", id: "3-6", showCategoryType: true, categoryType: '2' },
      { text: "唛架师", id: "3-9", showCategoryType: true, categoryType: '2' },
      { text: "打版兼车版", id: "3-12", showCategoryType: true, categoryType: '2' },
      { text: "核价师", id: "3-15", showCategoryType: true, categoryType: '2' },
      { text: "纸样学徒", id: "3-18", showCategoryType: true, categoryType: '2' }
    ]
  },
  {
    text: '工厂管理类',
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
    children: [
      { text: "男装设计师", id: "9-0", showCategoryType: true, categoryType: '2' },
      { text: "女装设计师", id: "9-3", showCategoryType: true, categoryType: '2' },
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
  value: '1'
}, {
  name: '来料加工',
  value: '2'
}, {
  name: '裁片外发',
  value: '3'
}, {
  name: '开发生产供应商',
  value: '4'
}]

const usedDetectCategory = [{
  text: '设备类',
  children: [
    { text: "货架", id: "1-0" },
    { text: "电脑", id: "1-3" },
    { text: "模特(含卓天商务模特)", id: "1-6" },
    { text: "四线", id: "1-9" },
    { text: "五线", id: "1-12" },
    { text: "冚车", id: "1-15" },
    { text: "模板纷棉车", id: "1-18" },
    { text: "专机类", id: "1-21", needDetail: true },
    { text: "唛架机", id: "1-24" },
    { text: "烫炉/烫台", id: "1-27" },
    { text: "凤眼机", id: "1-30" },
    { text: "打揽机", id: "1-33" },
    { text: "手工类", id: "1-36" },
    { text: "手工类", id: "1-39" }
  ]
}, {
  text: '生活类',
  children: [
    { text: "电动车", id: "2-0" },
    { text: "冰箱", id: "2-3" },
    { text: "洗衣机", id: "2-6" },
    { text: "空调", id: "2-9" }
  ]
}]

const fabricPropList = [{
  name: '针织',
  value: '1'
}, {
  name: '梭织',
  value: '2'
}, {
  name: '毛织',
  value: '3'
}, {
  name: '卫衣',
  value: '4'
}, {
  name: '牛仔',
  value: '5'
}, {
  name: '雪纺/真丝',
  value: '6'
}, {
  name: '蕾丝/网纱',
  value: '7'
}, {
  name: '毛呢',
  value: '8'
}, {
  name: '毛毛料',
  value: '9'
}, {
  name: '皮革料',
  value: '10'
}, {
  name: '毛毛料',
  value: '11'
}, {
  name: '水洗料',
  value: '12'
}, {
  name: '灯芯绒',
  value: '13'
}]

const productTypeList = [{
  name: 'T恤',
  value: '1'
}, {
  name: '小衫',
  value: '2'
}, {
  name: '衬衣',
  value: '3'
}, {
  name: '连衣裙',
  value: '4'
}, {
  name: '裤子',
  value: '5'
}, {
  name: '裙子',
  value: '6'
}, {
  name: '连体裤',
  value: '7'
}, {
  name: '外套',
  value: '8'
}, {
  name: '套装',
  value: '9'
}, {
  name: '两件套',
  value: '10'
}, {
  name: '毛毛衣',
  value: '11'
}, {
  name: '马夹',
  value: '12'
}, {
  name: '羽绒服/棉服',
  value: '13'
}, {
  name: '羽绒裤/棉裤',
  value: '14'
}, {
  name: '童装',
  value: '15'
}, {
  name: '男装',
  value: '16'
}]

const orderTypeList = [{
  name: '档口货',
  value: '1'
}, {
  name: '网档单',
  value: '2'
}, {
  name: '直播单',
  value: '3'
}, {
  name: '电商单',
  value: '4'
}, {
  name: '公司单',
  value: '5'
}, {
  name: '卓天商务单',
  value: '6'
}, {
  name: '外单',
  value: '7'
}]

const factoryScaleList = [{
  name: '工厂',
  value: '1'
}, {
  name: '小作坊',
  value: '2'
}]

const leaseTransferCategory = [{
  text: '招租',
  children: [
    { text: "厂房招租", id: "1-0" },
    { text: "公司/写字楼招租", id: "1-3" },
    { text: "直播间招租", id: "1-6" },
    { text: "店铺招租", id: "1-9" },
    { text: "商铺招租", id: "1-12", needDetail: true },
    { text: "房屋出租", id: "1-15", needDetail: true }
  ]
}, {
  text: '转让',
  children: [
    { text: "公司/写字楼转让", id: "2-0" },
    { text: "直播间转让", id: "2-3" },
    { text: "店铺转让", id: "2-6" },
    { text: "商铺转让", id: "2-9" },
    { text: "厂房转让", id: "2-12" },
    { text: "制衣厂转让", id: "2-15" },
    { text: "裁床转让", id: "2-18" },
    { text: "烫房转让", id: "2-21" },
    { text: "专机店转让", id: "2-24" },
    { text: "住房转让", id: "2-27" },
    { text: "餐管转让", id: "2-30" }
  ]
}]

const workerFilter = [{
  type: 'category',
  id: 'category',
  text: '岗位筛选',
  initText: '岗位筛选',
  value: [],
  activeList: [],
  list: findWorkerCategory,
  max: 3
}, {
  type: 'dropdown',
  id: 'distance',
  text: '距离筛选',
  initText: '距离筛选',
  activeList: [],
  value: [0, 100]
}]

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
  id: 'productType',
  text: '产品类型筛选',
  initText: '产品类型筛选',
  value: [],
  activeList: [],
  list: productTypeList
}, {
  type: 'checkbox',
  id: 'orderType',
  text: '订单类型筛选',
  initText: '订单类型筛选',
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

export default {
  // note: 招工
  findWorker: {
    category: findWorkerCategory,
    filterList: workerFilter,
    fromOrigin: 'bossWorker',
    partyA: {
      title: ['我要招工', '招工列表']
    },
    partyB: {
      title: '我要找事做'
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
      title: ['我要找工厂', '找工厂列表']
    },
    partyB: {
      title: '我要找货做'
    }
  },
  // note: 出租转让
  leaseTransfer: {
    category: leaseTransferCategory,
    filterList: leaseTransferFilter,
    fromOrigin: 'leaseTransfer',
    partyA: {
      title: ['出租转让', '出租转让列表']
    },
    partyB: {
      title: '租房'
    }
  },
  // note: 公司直聘
  employ: {
    fromOrigin: 'employAppli',
    filterList: [],
    partyA: {
      title: ['公司直聘', '直聘列表']
    },
    partyB: '应聘公司岗'
  },
  // note: 二手设备
  usedDetect: {
    fromOrigin: 'usedDetect',
    category: usedDetectCategory,
    filterList: usedDetectFilter,
    partyA: {
      title: ['出售二手设备', '二手设备列表']
    },
    partyB: '我要捡漏二手没备'
  },
  // note: 尾货处理
  tailings: {
    fromOrigin: 'tailings',
    filterList: [],
    partyA: {
      title: ['尾货处理', '尾货处理列表']
    },
    partyB: '货尾中心'
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
