import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        // 调用了store中的mutation中的app/closeSideBar方法，传入了withoutAnimation: false
        // 开启动画
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    }
  },
  beforeMount() {
    // resize调整大小
    window.addEventListener('resize', this.$_resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler)
  },
  mounted() {
    const isMobile = this.$_isMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $_resizeHandler() {
      // 当文档显示的时候
      if (!document.hidden) {
        // 获取当前的设备是否是移动端
        const isMobile = this.$_isMobile()
        // 将当前的设备类型存储到store中
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          // isMobile是true的时候
          // 在移动端
          // 控制store中的app/closeSideBar 改变withoutAnimation 不使用动画
          store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    }
  }
}
