const category = [
  {
    text: '技术类',
    children: [
      { text: "主裁", id: "2-1", showCategoryType: true },
      { text: "副裁/电剪", id: "2-2", showCategoryType: true },
      { text: "拉布分片", id: "2-3", showCategoryType: true },
      { text: "大烫/中烫", id: "2-4", showCategoryType: true },
      { text: "剪线工", id: "2-5", showCategoryType: true },
      { text: "包装工", id: "2-6", showCategoryType: true },
      { text: "手工类", id: "2-7", needDetail: true, showCategoryType: true },
      { text: "四线/五线/打边", id: "2-7.1", showCategoryType: true },
      { text: "专机类", id: "2-8", needDetail: true, showCategoryType: true },
      { text: "平车工", id: "2-9", showCategoryType: true },
      { text: "冚车工", id: "2-10", showCategoryType: true },
      { text: "卷边", id: "2-11", showCategoryType: true },
      { text: "做饭阿姨", id: "2-12", showCategoryType: true }
    ]
  },
  {
    text: '管理类',
    children: [
      { text: "厂长", id: "1-1" },
      { text: "车间主管/指导工", id: "1-2" },
      { text: "尾部主管", id: "1-3" },
      { text: "外发主管", id: "1-4" },
      { text: "跟单", id: "1-5" },
      { text: "仓库管理员", id: "1-6" },
      { text: "文员", id: "1-7" },
      { text: "收发", id: "1-8" },
      { text: "中查/尾查", id: "1-9" },
      { text: "设计师", id: "1-10" },
      { text: "设计助理", id: "1-11" },
      { text: "打板师", id: "1-12" },
      { text: "车板工", id: "1-13" },
      { text: "面辅料采购", id: "1-14" },
      { text: "司机", id: "1-15" }
    ]
  }
]

export default {
  findWorker: {
    category,
    form: ['price', 'poi', 'tel', 'time', 'images', 'note']
  }
}
