
// 获取title
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Admin Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    // 字符串的拼接
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
