const category = [
  {
    text: '车间生产类',
    children: [
      { text: "主裁/师傅", id: "1-0", showCategoryType: true },
      { text: "电剪", id: "1-3", showCategoryType: true },
      { text: "拉布", id: "1-6", showCategoryType: true },
      { text: "大烫", id: "1-9", showCategoryType: true },
      { text: "中烫", id: "1-12", showCategoryType: true },
      { text: "剪线", id: "1-12", showCategoryType: true },
      { text: "包装", id: "1-15", showCategoryType: true },
      { text: "成件车位", id: "1-18", showCategoryType: true },
      { text: "四线/五线", id: "1-21", showCategoryType: true },
      { text: "平车", id: "1-24", showCategoryType: true },
      { text: "冚车", id: "1-27", showCategoryType: true },
      { text: "卷边", id: "1-30", showCategoryType: true },
      { text: "做领上领", id: "1-33", showCategoryType: true },
      { text: "上腰", id: "1-36", showCategoryType: true },
      { text: "车门筒", id: "1-39", showCategoryType: true },
      { text: "车口袋", id: "1-42", showCategoryType: true },
      { text: "模板绗线", id: "1-45", showCategoryType: true },
      { text: "塞棉/拍棉", id: "1-48", showCategoryType: true },
      { text: "手工类", id: "1-51", showCategoryType: true, needDetail: true },
      { text: "专机类", id: "1-54", showCategoryType: true, needDetail: true },
      { text: "指导工/工艺", id: "1-57", categoryType: '2' },
      { text: "收发", id: "1-60", showCategoryType: true, categoryType: '2' },
      { text: "跟单", id: "1-63", showCategoryType: true, categoryType: '2' },
      { text: "仓管", id: "1-66", showCategoryType: true, categoryType: '2' },
      { text: "验布", id: "1-69", showCategoryType: true, categoryType: '2' },
      { text: "做饭工", id: "1-72", showCategoryType: true, categoryType: '2' },
      { text: "杂工", id: "1-75", showCategoryType: true, categoryType: '2' },
      { text: "其他", id: "1-78", showCategoryType: true, categoryType: '2', needDetail: true }
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

export default {
  findWorker: {
    category,
    form: ['price', 'poi', 'tel', 'time', 'images', 'note']
  }
}
