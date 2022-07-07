/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  // 以https：/ mailto：/ tel：为开头的字符串，如果匹配上返回true
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  // 判断str.trim()是否在['admin', 'editor']当中
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 用于校验用户的手机号
 * @param {string} 输入的手机号
 * @returns {Boolean} 返回输入的手机号是否符合规则
 */
export function validMobile(mobile) {
  return /^1[3-9]\d{9}$/.test(mobile)
}
