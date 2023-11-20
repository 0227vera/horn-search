// note: 获取位置和距离
const getAddressAndDistance = (item, text = '位置:') => {
  const distance = item.distance
  let right = ''
  if (distance) {
    if (distance < 0.1) {
      right = '距您100米内'
    } else {
      right = `距您${distance}km`
    }
  }
  return {
    type: 'map',
    text,
    value: item.poi.detail || item.poi.address,
    right: right || ''
  }
}

const actions = {
  bossWorker: (item, filterKeys) => {
    const content = []
    let categoryName = item.categoryName
    if (filterKeys.includes('category')) {
      categoryName = `{${categoryName}}`
    }
    let categoryValue = `${categoryName}${item.categorySub ? `(${item.categorySub})` : ''}-${item.categoryNum}人-${item.categoryTypeName}`
    content.push({
      type: 'map',
      text: '急招:',
      value: categoryValue
    })
    // 薪资/单价
    const priceText = item.categoryType === '2' ? '薪资:' : '单价:'
    let priceValue = ''
    if (item.categoryType === '2') {
      priceValue = `${item.priceMin}${item.priceUnitName} ~ ${item.priceMax}${item.priceUnitName}`
    } else {
      priceValue = `${item.price}${item.priceUnitName}`
      if (item.num) {
        priceValue += `(单量：${item.num}件)`
      }
    }
    content.push({
      type: 'map',
      text: priceText,
      value: priceValue
    })
    return content
  },
  factoryCooper: (item, filterKeys) => {
    const content = []
    if (item.cooperType !== 'a3') {
      content.push({
        type: 'map',
        text: '地域要求:',
        value: filterKeys.includes('area') ? `{${item.area}}` : `${item.area}`
      })
    }
    let factoryScaleValue = `${item.factoryScaleName}`
    if (filterKeys.includes('factoryScale')) {
      factoryScaleValue = `{${factoryScaleValue}}`
    }
    if (item.factoryScale === 'e1') {
      item.people && (factoryScaleValue += `-${item.people}人以上`)
    } else if (item.factoryScale === 'e2') {
      item.people && (factoryScaleValue += `-${item.people}人左右`)
    }
    factoryScaleValue += `-${item.cooperTypeName}`
    content.push({
      type: 'map',
      text: '规模要求:',
      value: factoryScaleValue
    })
    let productTypeName = item.productTypeName
    if (filterKeys.includes('productType')) {
      productTypeName = `{${productTypeName}}`
    }
    let numText = `${item.num}件左右-${productTypeName}`
    content.push({
      type: 'map',
      text: '加工数量:',
      value: numText
    })
    return content
  },
  leaseTransfer: (item, filterKeys) => {
    const content = []
    let { categoryName, floor, area } = item
    if (filterKeys.includes('category')) {
      categoryName = `{${categoryName}}`
    }
    if (filterKeys.includes('floor')) {
      floor = `{${floor}}`
    }
    if (filterKeys.includes('area')) {
      area = `{${area}}`
    }
    content.push({
      type: 'map',
      text: '类别:',
      value: `${categoryName}${item.useName ? `(${item.useName})` : ''}-${floor}楼-${area}平`
    })
    content.push({
      type: 'map',
      text: '租金:',
      value: `${item.price}${item.priceUnitName}`
    })
    return content
  },
  usedDetect: (item, filterKeys) => {
    const content = []
    let { categoryName, price } = item
    if (filterKeys.includes('category')) {
      categoryName = `{${categoryName}}`
    }
    if (filterKeys.includes('price')) {
      price = `{${price}}`
    }
    let categoryValue = `${categoryName}${item.categorySub ? `(${item.categorySub})` : ''}`
    content.push({
      type: 'map',
      text: '名称:',
      value: categoryValue
    })
    item.price && content.push({
      type: 'map',
      text: '价格:',
      value: `${price}元`
    })
    return content
  },
  tailings: (item, filterKeys) => {
    const content = []
    let { categoryName } = item
    if (filterKeys.includes('category')) {
      categoryName = `{${categoryName}}`
    }
    content.push({
      type: 'map',
      text: '类别:',
      value: `${categoryName}${item.categorySub ? `(${item.categorySub})` : ''}`
    })
    if (item.times?.length) {
      const [start, end] = item.times
      let text = ''
      if (start && end) {
        text = `${start}~${end}`
      } else if (start) {
        text = `${start}以后`
      } else if (end) {
        text = `${end}以前`
      }
      text && content.push({
        type: 'map',
        text: '联系点:',
        value: `${text}`
      })
    }
    return content
  }
}

export default actions
