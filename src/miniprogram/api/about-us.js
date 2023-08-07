import request from "./request"

export const getUsList = params => request({ route: 'admin/us_manager_list', params })

export const updateUsItem = params => request({ route: 'admin/update_us_manager_item', params })
