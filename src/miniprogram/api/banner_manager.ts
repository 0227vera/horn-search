import request from "./request"

export const getBannerList = params => request({ route: 'admin/banner_manager_list', params })

export const addBannerItem = params => request({ route: 'admin/add_banner_manager_item', params })

export const updateBannerItem = params => request({ route: 'admin/update_banner_manager_item', params })

export const deleteBannerItem = params => request({ route: 'admin/delete_banner_manager_item', params })
