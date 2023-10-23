const telReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

export const validateBossWorker = ({ updateObj, subCategoryInfo } = {}) => {
  if (!updateObj) {
    console.error('updateObj应该为对象')
    return
  }
  const result = {
    success: false,
    text: ''
  }
  if (!updateObj.category) {
    result.text = '请选择{岗位}'
    return result
  }
  if (!updateObj.categoryNum) {
    result.text = '请输入岗位{招工人数}'
    return result
  }
  if (subCategoryInfo.show && !updateObj.categorySub) {
    result.text = subCategoryInfo.placeholder
    return result
  }

  if (updateObj.priceUnit !== '3' && !updateObj.price) {
    result.text = '请输入{单价/薪资}'
    return result
  }
  if (updateObj.priceUnit === '3') {
    if (!updateObj.priceMin) {
      result.text = '请输入{最低单价}'
      return result
    }
    if (!updateObj.priceMax) {
      result.text = '请输入{最高单价}'
      return result
    }
    if (+updateObj.priceMin > +updateObj.priceMax) {
      result.text = '{最高单价}不得小于{最低单价}'
      return result
    }
  }
  if (updateObj.categoryType === '1') {
    // if (!updateObj.numMin) {
    //   result.text = '请输入最少的数量'
    //   return result
    // }
    // if (!updateObj.numMax) {
    //   result.text = '请输入最多的数量'
    //   return result
    // }
    // if (+updateObj.numMin > +updateObj.numMax) {
    //   result.text = '最多数量不得小于最少数量'
    //   return result
    // }
    if (!updateObj.num) {
      result.text = '请输入{单量}'
      return result
    }
  }
  // if (!updateObj.origin) {
  //   result.text = '请输入货源'
  //   return result
  // }
  if (!updateObj.tel) {
    result.text = '请输入{手机号}'
    return result
  }
  if (!telReg.test(updateObj.tel)) {
    result.text = '请输入{正确的手机号}'
    return result
  }
  if (telReg.test(updateObj.origin)) {
    result.text = '{货源(品质层次)}中不可带{电话号码}'
    return result
  }
  if (telReg.test(updateObj.note)) {
    result.text = '{岗位要求}中不可带{电话号码}'
    return result
  }
  if (telReg.test(updateObj.add)) {
    result.text = '{待遇补充}中不可带{电话号码}'
    return result
  }
  if (telReg.test(updateObj.company)) {
    result.text = '{工厂名}中不可带{电话号码}'
    return result
  }
  result.success = true
  return result
}

export const validateFactory = ({ updateObj } = {}) => {
  if (!updateObj) {
    console.error('updateObj应该为对象')
    return
  }
  const result = {
    success: false,
    text: ''
  }
  if (!updateObj.factoryScale) {
    result.text = '请选择{工厂规模}'
    return result
  }
  if (updateObj.factoryScale === '1') {
    if (!updateObj.people) {
      result.text = '请选择{工厂人数}'
      return result
    }
  } else {
    if (!updateObj.peopleMin || !updateObj.peopleMax) {
      result.text = '请选择{作坊人数区间}'
      return result
    }
  }
  if (!updateObj.area) {
    result.text = '请选择{地域要求}'
    return result
  }
  if (!updateObj.cooperType) {
    result.text = '请选择{合作类型}'
    return result
  }
  if (!updateObj.numMin || !updateObj.numMax) {
    result.text = '请选择{生产数量区间}'
    return result
  }
  if (!updateObj.fabricProp?.length) {
    result.text = '请选择{面料属性}'
    return result
  }
  if (!updateObj.productType?.length) {
    result.text = '请选择{产品类型}'
    return result
  }
  if (!updateObj.orderType) {
    result.text = '请选择{订单类型}'
    return result
  }
  if (!updateObj.color || !updateObj.code) {
    result.text = '请输入{颜色码数}'
    return result
  }
  if (!updateObj.tel) {
    result.text = '请输入{手机号}'
    return result
  }
  if (!telReg.test(updateObj.tel)) {
    result.text = '请输入{正确的手机号}'
    return result
  }
  if (telReg.test(updateObj.add)) {
    result.text = '{补充}中不可带{电话号码}'
    return result
  }
  if (telReg.test(updateObj.company)) {
    result.text = '{工厂名}中不可带{电话号码}'
    return result
  }
  result.success = true
  return result
}

export const validateLease = ({ updateObj, subCategoryInfo } = {}) => {
  if (!updateObj) {
    console.error('updateObj应该为对象')
    return
  }
  const result = {
    success: false,
    text: ''
  }
  if (!updateObj.category) {
    result.text = '请选择{分类}'
    return result
  }
  if (subCategoryInfo.show && !updateObj.categorySub) {
    result.text = subCategoryInfo.placeholder
    return result
  }
  if (!updateObj.area) {
    result.text = '请填写{面积}'
    return result
  }
  if (!updateObj.floor) {
    result.text = '请填写{楼层}'
    return result
  }
  if (!updateObj.price) {
    result.text = '请填写{租金}'
    return result
  }
  if (!updateObj.deposit) {
    result.text = '请填写{押金}'
    return result
  }
  if (!updateObj.device) {
    result.text = '请填写{设备}'
    return result
  }
  if (!updateObj.tel) {
    result.text = '请输入{手机号}'
    return result
  }
  if (!telReg.test(updateObj.tel)) {
    result.text = '请输入{正确的手机号}'
    return result
  }
  if (telReg.test(updateObj.device)) {
    result.text = '{设备}中不可带{电话号码}'
    return result
  }
  if (telReg.test(updateObj.add)) {
    result.text = '{补充}中不可带{电话号码}'
    return result
  }
  result.success = true
  return result
}

export const validateUsed = ({ updateObj, subCategoryInfo } = {}) => {
  if (!updateObj) {
    console.error('updateObj应该为对象')
    return
  }
  const result = {
    success: false,
    text: ''
  }
  if (!updateObj.category) {
    result.text = '请选择{设备名称}'
    return result
  }
  if (subCategoryInfo.show && !updateObj.categorySub) {
    result.text = subCategoryInfo.placeholder
    return result
  }
  if (!updateObj.images.length) {
    result.text = '请上传图片信息'
    return result
  }
  if (!updateObj.tel) {
    result.text = '请输入{手机号}'
    return result
  }
  if (!telReg.test(updateObj.tel)) {
    result.text = '请输入{正确的手机号}'
    return result
  }
  if (telReg.test(updateObj.note)) {
    result.text = '{产品概述说明}中不可带{电话号码}'
    return result
  }
  result.success = true
  return result
}

export const tailingsValidate = ({ updateObj, subCategoryInfo } = {}) => {
  if (!updateObj) {
    console.error('updateObj应该为对象')
    return
  }
  const result = {
    success: false,
    text: ''
  }
  if (!updateObj.category) {
    result.text = '请选择{货品类别}'
    return result
  }
  if (subCategoryInfo.show && !updateObj.categorySub) {
    result.text = subCategoryInfo.placeholder
    return result
  }
  if (!updateObj.tel) {
    result.text = '请输入{手机号}'
    return result
  }
  if (!telReg.test(updateObj.tel)) {
    result.text = '请输入{正确的手机号}'
    return result
  }
  if (updateObj.times[0] && updateObj.times[1]) {
    const [start, end] = updateObj.times
    if (+(start.replace(':', '')) >= +(end.replace(':', ''))) {
      result.text = '{联系时间}最早不能大于最晚'
      return result
    }
  }
  if (telReg.test(updateObj.note)) {
    result.text = '{补充说明}中不可带{电话号码}'
    return result
  }
  result.success = true
  return result
}
