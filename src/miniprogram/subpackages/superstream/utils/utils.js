export const timeInfo = t => {
  if (t) {
    const time = new Date(t)
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const hour = time.getHours()
    const min = time.getMinutes()
    return `${year}年${month}月${day}日${hour}时${min}分`
  }
  return ''
}

export const formatNumSubmitData = ({ obj = {}, formatList = [] }) => {
  Object.keys(obj).forEach(item => {
    if (formatList.includes(item) && obj[item]) {
      obj[item] = +obj[item]
    }
  })
  return obj
}

export const getDistance = (lat1, lng1, lat2, lng2) => {
  var radLat1 = lat1 * Math.PI / 180.0
  var radLat2 = lat2 * Math.PI / 180.0
  var a = radLat1 - radLat2
  var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000
  return s
}
