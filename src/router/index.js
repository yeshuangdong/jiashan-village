import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/member/honor',
      component: () => import('@/views/layout'),
      children: [
        {
          path: '/member/honor',
          name: 'Honor',
          component: () => import('@/views/member/honor'),
          meta: {
            title: '积分光荣榜'
          }
        },
        {
          path: '/member/add',
          name: 'MemberAdd',
          component: () => import('@/views/member/add'),
          meta: {
            title: '添加居民信息'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login'),
      meta: {
        title: '会员登录'
      }
    },
    {
      path: '*',
      name: 'error',
      component: () => import('@/views/error'),
      meta: {
        title: '找不到页面'
      }
    }
  ]
})

export default route
