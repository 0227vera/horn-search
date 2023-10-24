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
  bossWorker: item => {
    const content = []
    content.push(getAddressAndDistance(item))
    let categoryValue = `${item.categoryName}${item.categorySub ? `(${item.categorySub})` : ''}-{${item.categoryNum}人}-${item.categoryTypeName}`
    content.push({
      type: 'map',
      text: '岗位:',
      value: categoryValue
    })
    // 薪资/单价
    const priceText = item.categoryType === '2' ? '薪资:' : '单价:'
    let priceValue = ''
    if (item.categoryType === '2') {
      priceValue = `{${item.priceMin}${item.priceUnitName}} ~ {${item.priceMax}${item.priceUnitName}}`
    } else {
      priceValue = `{${item.price}${item.priceUnitName}}`
      if (item.num) {
        priceValue += `(单量：{${item.num}件})`
      }
    }
    content.push({
      type: 'map',
      text: priceText,
      value: priceValue
    })

    return content
  },
  factoryCooper: item => {
    const content = []
    if (item.cooperType === '3') {
      content.push(getAddressAndDistance(item, '裁床地址:'))
    } else {
      content.push({
        type: 'map',
        text: '地域要求:',
        value: `{${item.area}}`
      })
    }
    let factoryScaleValue = `${item.factoryScaleName}`
    if (item.factoryScale === '1') {
      item.people && (factoryScaleValue += `-${item.people}人以上`)
    } else if (item.factoryScale === '2') {
      item.people && (factoryScaleValue += `-${item.people}人左右`)
    }
    factoryScaleValue += `-{${item.cooperTypeName}}`
    content.push({
      type: 'map',
      text: '规模要求:',
      value: factoryScaleValue
    })
    content.push({
      type: 'map',
      text: '加工数量:',
      value: `{${item.num}}件左右-{${item.productTypeName}}`
    })
    return content
  },
  leaseTransfer: item => {
    const content = []
    content.push(getAddressAndDistance(item))
    content.push({
      type: 'map',
      text: '类别:',
      value: `${item.categoryName}-{${item.floor}楼}-{${item.area}平}`
    })
    content.push({
      type: 'map',
      text: '租金:',
      value: `${item.price}${item.priceUnitName}(押{${item.deposit}个月)}`
    })
  },
  usedDetect: item => {
    const content = []
    content.push(getAddressAndDistance(item))
    let categoryValue = `{${item.categoryName}${item.categorySub ? `(${item.categorySub})` : ''}}`
    content.push({
      type: 'map',
      text: '名称:',
      value: categoryValue
    })
    item.price && content.push({
      type: 'map',
      text: '价格:',
      value: `{${item.price}元}`
    })
    item.note && content.push({
      type: 'map',
      text: '概述:',
      value: item.note
    })
    return content
  },
  tailings: item => {
    const content = []
    content.push(getAddressAndDistance(item))
    content.push({
      type: 'map',
      text: '类别:',
      value: `${item.categoryName}${item.categorySub ? `(${item.categorySub})` : ''}`
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
        value: `{${text}}`
      })
    }
    item.note && content.push({
      title: '补充:',
      value: item.note
    })
    return content
  }
}

export default actions
