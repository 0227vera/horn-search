import request from "./request"

export const getAddressList = params => request({ route: 'address_manager/get', params })

export const addAddress = params => request({ route: 'address_manager/create', params })

export const updateAddress = params => request({ route: 'address_manager/update', params })

export const deleteAddress = params => request({ route: 'address_manager/delete', params })
