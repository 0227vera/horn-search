import store from '@/store'
import { getReleaseCount } from '@/api'

const unreadFun = () => {
  const nav = store.state.categoryItems
  const result = JSON.parse(JSON.stringify(nav))
  console.log('-------->', result)
  result.children.forEach(item => {
    item.children.forEach(async (c) => {
      const res = await getReleaseCount({
        category: c.value
      })
      console.log(c.text, '----->', res)
    })
  })
  return result
}

export default unreadFun
