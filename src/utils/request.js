import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000 // 接口超时事间：20秒
})

service.interceptors.request.use(
  config => {
    // token设置在请求头上
    const token = store.getters.token
    // 判断token存在执行
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 获取响应的 success, message
    const { success, message } = response.data
    // 判断success是否为true
    if (success) {
      // 返回收到后端的data数据
      return response.data
    } else {
      // 否则返回错误对象并提示
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  },
  error => {
    console.dir(error)
    Message.error(error.response.data.message)
    if (error?.response?.data?.code === 10002) {
      store.commit('user/REMOVE_TOKEN')
      store.commit('user/RESET_STATE')
      router.replace(`/login?redirect=${encodeURIComponent(router.currentRoute.fullPath)}`)
    }
    return Promise.reject(error)
  }
)

export default service
