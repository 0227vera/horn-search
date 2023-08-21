import request from "./request"

export const getUserList = params => request({ route: 'user/get', params })

export const addUser = params => request({ route: 'user/create', params })

export const deleteUser = params => request({ route: 'user/delete', params })

export const updateUserInfo = params => request({ route: 'user/update', params })

export const getCurrentRole = params => request({ route: 'user/currentcole', params })
