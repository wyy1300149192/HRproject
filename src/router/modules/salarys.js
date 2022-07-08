import Layout from '@/layout'

// Layout组件中包含
export default {
  path: '/salarys', // 工资
  component: Layout,
  children: [
    {
      path: '',
      name: 'salarys',
      component: () => import('@/views/salarys'),
      meta: { title: '工资', icon: 'money' }
    }
  ]
}
