const validate = ({ updateObj, subCategoryInfo } = {}) => {
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
    result.text = '请输入{岗位}招聘{人数}'
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
      result.text = '请输入{数量}'
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
  if (!/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(updateObj.tel)) {
    result.text = '请输入{正确的手机号}'
    return result
  }
  if (/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(updateObj.origin)) {
    result.text = '{货源(品质层次)}中不可带{电话号码}'
    return result
  }
  if (/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(updateObj.note)) {
    result.text = '{岗位要求}中不可带{电话号码}'
    return result
  }
  if (/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(updateObj.add)) {
    result.text = '{待遇补充}中不可带{电话号码}'
    return result
  }
  if (/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(updateObj.company)) {
    result.text = '{工厂名}中不可带{电话号码}'
    return result
  }
  result.success = true
  return result
}

export default validate
