import { getUserInfoAPI, loginAPI, getUserPhotoAPI } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    userInfo: {}
  }
}
const state = getDefaultState()

const mutations = {
  // 复位state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // 新增token
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },

  // 删除token
  REMOVE_TOKEN: (state) => {
    state.token = ''
    removeToken()
  },

  // 设置用户
  SET_USERINFO: (state, data) => {
    state.userInfo = data
  },
  // 删除用户
  REMOVE_USERINFO: (state) => {
    state.userInfo = {}
  }
}

const actions = {
  // 登录请求
  async loginAPIActions({ commit }, data) {
    try {
      // 调用请求函数，收到请求结果
      const res = await loginAPI(data)
      // 执行mutations中 SET_TOKEN 设置token
      commit('SET_TOKEN', res.data)
      Message.success(res.message)
      return res
    } catch (err) { console.log(err) }
  },

  // 获取用户信息请求
  async getUserInfo({ commit }) {
    try {
      const { data: info } = await getUserInfoAPI()
      // console.log(info.userId)
      const { data: photo } = await getUserPhotoAPI(info.userId)
      console.log(info, photo)
      const userObj = { ...info, ...photo }
      commit('SET_USERINFO', userObj)
    } catch (err) {
      console.log(err)
    }
  },

  // 退出登录
  logOut({ commit }) {
    commit('REMOVE_TOKEN')
    commit('RESET_STATE')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
