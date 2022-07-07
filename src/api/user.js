import request from '@/utils/request'

/**
 * 登录接口
 * @param {*} data 登录参数
 * @param {*} data.mobile string  登录的账号
 * @param {*} data.password string  登录的密码
 * @returns promise
 */
export function loginAPI(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户信息接口
 * @returns promise
 */
export function getUserInfoAPI() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/**
 * 获取员工基本信息
 * @returns promise
 */
export function getUserPhotoAPI(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'get'
  })
}

