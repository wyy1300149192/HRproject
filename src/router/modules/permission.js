import Layout from '@/layout'

// Layout组件中包含
export default {
  path: '/permission', // 社保
  component: Layout,
  children: [
    {
      path: '',
      name: 'permission',
      component: () => import('@/views/permission'),
      meta: { title: '权限管理', icon: 'lock' }
    }
  ]
}
