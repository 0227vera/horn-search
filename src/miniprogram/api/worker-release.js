import request from "./request"

export const getWorkerReleaseList = params => request({ route: 'worker-release/get', params })

export const addWorkerRelease = params => request({ route: 'worker-release/create', params })

export const deleteWorkerRelease = params => request({ route: 'worker-release/delete', params })

export const updateWorkerRelease = params => request({ route: 'worker-release/update', params })

export const getWorkerReleaseOneById = params => request({ route: 'worker-release/getonebyid', params })
