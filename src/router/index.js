import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 引入组件
import Home from '../views/Home.vue'
import About from '../views/dashboard/index.vue'

// import NotFound from '../views/NotFound.vue'

// 2. 使用 VueRouter
Vue.use(VueRouter)

// 3. 定义路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   // 动态路由参数
  //   path: '/user/:id',
  //   name: 'User',
  //   component: User,
  //   // 路由守卫示例
  //   beforeEnter: (to, from, next) => {
  //     // 可以在这里添加验证逻辑
  //     next()
  //   }
  // },
  // // 嵌套路由示例
  // {
  //   path: '/settings',
  //   component: () => import('../views/Settings.vue'),
  //   children: [
  //     {
  //       path: 'profile',
  //       component: () => import('../views/Profile.vue')
  //     },
  //     {
  //       path: 'notifications',
  //       component: () => import('../views/Notifications.vue')
  //     }
  //   ]
  // },
  // 404 路由
  // {
  //   path: '*',
  //   component: NotFound
  // }
]

// 4. 创建路由实例
const router = new VueRouter({
  mode: 'history', // 可以使用 'hash' 或 'history'
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 处理页面滚动
    return savedPosition || { x: 0, y: 0 }
  }
})

// 5. 全局导航守卫
// router.beforeEach((to, from, next) => {
//   // 例如：检查用户是否登录
//   const isAuthenticated = localStorage.getItem('token')
//   if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router