import request from "./request"

export const getComPanyInfo = params => request({ route: 'admin/get_company_info', params })

export const updateComPanyInfo = params => request({ route: 'admin/update_company_info', params })
