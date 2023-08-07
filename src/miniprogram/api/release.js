import request from "./request"

export const getReleaseList = params => request({ route: 'release/get', params })

export const addRelease = params => request({ route: 'release/create', params })

export const deleteRelease = params => request({ route: 'release/delete', params })
