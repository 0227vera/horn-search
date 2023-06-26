import request from "./request"

export const getClassManagerList = params => request({ route: 'admin/class_manager_list', params })

export const updateClassManagerItem = params => request({ route: 'admin/update_class_manager_item', params })

export const addClassManagerItem = params => request({ route: 'admin/add_class_manager_item', params })

export const deleteClassManagerItem = params => request({ route: 'admin/delete_class_manager_item', params })
