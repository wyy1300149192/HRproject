// 通过这个工具来持久化token
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token'

// 获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
