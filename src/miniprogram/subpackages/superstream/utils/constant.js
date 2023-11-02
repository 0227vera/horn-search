import store from '@/store'
export const initBossWorkerObj = {
  category: '',
  categoryType: '',
  categoryTypeName: '',
  categoryName: '',
  categorySub: '',
  categoryNum: '',
  origin: '',
  num: '',
  numMin: '',
  numMax: '',
  note: '',
  price: '',
  priceMin: '',
  priceMax: '',
  priceUnit: '1',
  priceUnitName: '元/件',
  tel: '',
  images: [],
  poi: {},
  add: '',
  company: store.state.company
}

export const unitList = [
  { text: '元/件', value: '1' },
  { text: '元/小时', value: '2' },
  { text: '元/天', value: '0' },
  { text: '元/月', value: '3' }
]

export const rentUnitList = [
  { text: '元/月', value: '1' },
  { text: '元/平', value: '2' }
]

export const categoryTypeList = [
  { text: '临时工', value: '1' },
  { text: '长期工', value: '2' }
]

export const initFactoryObj = {
  factoryScale: '',
  factoryScaleName: '',
  people: '',
  // peopleMin: '',
  // peopleMax: '',
  area: '',
  cooperType: '',
  cooperTypeName: '',
  // price: '',
  num: '',
  // numMin: '',
  // numMax: '',
  fabricProp: '',
  fabricPropName: '',
  productType: '',
  productTypeName: '',
  orderType: '',
  orderTypeName: '',
  // color: '',
  images: [],
  tel: '',
  poi: {},
  add: ''
  // company: store.state.company
}

export const pageInfo = {
  page: 1,
  size: 5
}

export const initLeaseObj = {
  category: '',
  categoryName: '',
  categorySub: '',
  categorySubId: '',
  useId: '',
  useName: '',
  area: '',
  floor: '',
  price: '',
  priceUnit: '1',
  priceUnitName: '元/月',
  device: '',
  poi: {},
  tel: '',
  images: [],
  add: ''
}

export const initUsedObj = {
  category: '',
  categoryName: '',
  categorySub: '',
  price: '',
  poi: {},
  tel: '',
  images: [],
  note: ''
}

export const initTailingsObj = {
  category: '',
  categoryName: '',
  categorySub: '',
  poi: {},
  tel: '',
  images: [],
  times: [],
  note: ''
}
