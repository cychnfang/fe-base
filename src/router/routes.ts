import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/pages/home.vue'
const routers: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home
      }
    ]
  }
]

export default routers
