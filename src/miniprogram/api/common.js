import request from './request'

export const getCommonConfig = params => request({ route: 'common/getconstant', params })

export const getPhone = params => request({ route: 'common/getphone', params })
