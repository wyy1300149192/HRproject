import Layout from '@/layout'

// Layout组件中包含
export default {
  path: '/attendances', // 考勤
  component: Layout,
  children: [
    {
      path: '',
      name: 'attendances',
      component: () => import('@/views/attendances'),
      meta: { title: '考勤', icon: 'skill' }
    }
  ]
}
