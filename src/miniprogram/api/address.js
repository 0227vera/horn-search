import request from "./request"

export const getAddressList = params => request({ route: 'address/get', params })

export const addAddress = params => request({ route: 'address/create', params })

export const updateAddress = params => request({ route: 'address/update', params })

export const deleteAddress = params => request({ route: 'address/delete', params })
