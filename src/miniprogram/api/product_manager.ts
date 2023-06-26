import request from "./request"

export const getProductList = params => request({ route: 'admin/product_manager_list', params })

export const addProductItem = params => request({ route: 'admin/add_product_manager_item', params })

export const updateProductItem = params => request({ route: 'admin/update_product_manager_item', params })

export const deleteProducItem = params => request({ route: 'admin/delete_product_manager_item', params })
