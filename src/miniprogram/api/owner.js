import request from './request'

export const isAdmin = params => request({ route: 'admin/isadmin', params })
