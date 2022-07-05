// 引入了vue的实例 后面应该给vue实例挂载了一些内容
import Vue from 'vue'
// 渲染svg图标的组件
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
// 在vue实例上挂载了一个全局组件 用于显示图标字体
Vue.component('svg-icon', SvgIcon)

// 遍历文件夹的文件，从中获取指定文件，自动导入模块
// 需要读取模块的文件的所在目录'./svg'
// 是否遍历子目录 false
// 匹配的规则（正则表达式） /\.svg$/ $代表匹配结尾
const req = require.context('./svg', false, /\.svg$/)
// const requireAll = requireContext => requireContext.keys().map(requireContext)

// .keys() 的作用 获取对象中所有的属性，并且返回一个数组
// .map() 的作用 遍历了数组，同时对数组中每个元素都执行一个方法，并且将方法返回的新值形成一个新数组
const requireAll = function(requireContext) {
  return requireContext.keys().map(requireContext)
}

requireAll(req)
