/*
 * @Author: yuhaonan 11102244+yuhaonan1111@user.noreply.gitee.com
 * @Date: 2022-07-02 10:21:30
 * @LastEditors: yuhaonan 11102244+yuhaonan1111@user.noreply.gitee.com
 * @LastEditTime: 2022-07-03 11:15:00
 * @FilePath: /vue-admin-template/src/utils/validate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Created by PanJiaChen on 16/11/18.
 */

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
