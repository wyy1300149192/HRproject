import router from './router'
import store from './store'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由守卫白名单
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 进度条开始
  Nprogress.start()
  // 获取token
  const token = store.getters.token
  // 如果已有token
  if (token) {
    // 如果是登录页
    if (to.path === '/login') {
      next('/')
      Nprogress.done()
      // 如果非登录页
    } else {
      next()
      // 判断如果vuex中的用户信息为空则
      if (!store.getters.userInfo) { store.dispatch('user/getUserInfo') }

      Nprogress.done()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
      Nprogress.done()
    }
  }
})

router.afterEach(() => {
  Nprogress.done()
})
