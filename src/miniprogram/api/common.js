import request from './request'

export const getCommonConfig = params => request({ route: 'common/getconstant', params })
