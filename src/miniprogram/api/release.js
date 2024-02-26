import request from "./request"
import store from '@/store'

const getCommonParams = (params = {}) => {
  return {
    fromOrigin: store.state.fromOrigin,
    ...params
  }
}

export const getReleaseList = params => request({ route: 'release/get', params: getCommonParams(params) })

export const addRelease = params => request({ route: 'release/create', params: getCommonParams(params) })

export const deleteRelease = params => request({ route: 'release/delete', params: getCommonParams(params) })

export const updateRelease = params => request({ route: 'release/update', params: getCommonParams(params) })

export const getReleaseOneById = params => request({ route: 'release/getonebyid', params: getCommonParams(params) })

export const getReleaseCount = params => request({ params: getCommonParams(params), route: 'release/getcount' })
