/*
 * @Author: yuhaonan 11102244+yuhaonan1111@user.noreply.gitee.com
 * @Date: 2022-07-02 10:21:30
 * @LastEditors: yuhaonan 11102244+yuhaonan1111@user.noreply.gitee.com
 * @LastEditTime: 2022-07-02 17:30:55
 * @FilePath: /vue-admin-template/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

// 注册vuex插件
Vue.use(Vuex)

// 初始化store，并且引入相关的模块
const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters
})

export default store
