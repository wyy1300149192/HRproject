<!-- 前端页面的布局 -->
<template>
  <!-- 整个页面的容器 -->
  <div :class="classObj" class="app-wrapper">
    <!-- device==='mobile'代表当前是移动端
    sidebar是导航侧边栏
    sidebar.opened 代表侧边栏开启 -->
    <!-- 他是个遮罩层 移动端切打开侧边栏的时候开启 -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <!-- 侧边栏 用于导航 -->
    <sidebar class="sidebar-container" />
    <!-- 页面主要内容显示区域 -->
    <div class="main-container">
      <!-- 顶部的导航条 -->
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <!-- 二级路由的挂载点，切换路由里面的内容也跟着切换 -->
      <app-main />
    </div>
  </div>
</template>

<script>
// 组件的引入 从同一层级的components当中引入了Navbar, Sidebar, AppMain
// 组件引入的路径如果只写到了文件夹，会自动查找文件夹下的index.js文件
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  // 组件注册
  components: {
    Navbar,
    Sidebar,
    AppMain
  },

  // 做了代码的合并
  mixins: [ResizeMixin],
  // computed和methods的区别？
  // 1、computed 可以缓存 methods没有缓存
  // 2、调用执行的时机不同，methods只能在调用的时候执行 computed依赖的数据改变就执行
  // 3、methods可以实现异步 computed不能异步
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
