import request from "./request"

export const getReleaseList = params => request({ route: 'release/get', params })

export const addRelease = params => request({ route: 'release/create', params })

export const deleteRelease = params => request({ route: 'release/delete', params })

export const updateRelease = params => request({ route: 'release/update', params })

export const getReleaseOneById = params => request({ route: 'release/getonebyid', params })

export const getReleaseCount = params => request({ params, route: 'release/getcount' })
