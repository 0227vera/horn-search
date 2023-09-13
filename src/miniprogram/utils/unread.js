import store from '@/store'
import { getReleaseCount } from '@/api' // 之后用socket取代

const unreadFun = () => {
  const nav = store.state.categoryItems
  const result = JSON.parse(JSON.stringify(nav))
  result.children.forEach(item => {
    item.children.forEach(async (c) => {
      const res = await getReleaseCount({
        category: c.value
      })
      c.unread = +res.data || 0
      store.commit('setState', {
        categoryItems: result
      })
    })
  })
}

export default unreadFun
