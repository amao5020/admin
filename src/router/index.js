import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve),
      meta: {
        title: 'loginBox'
      },
      children: [
        {
          path: '/loginBox',
          component: resolve => require(['@/components/login/components/loginBox'], resolve),
          meta: {
            title: 'loginBox'
          }
        },
        {
          path: '/registerBox',
          component: resolve => require(['@/components/login/components/registerBox'], resolve),
          meta: {
            title: 'logregisterBoxinBox'
          }
        }
      ]
    },
    {
      path: '/menu',
      name: 'menu',
      component: resolve => require(['@/components/menu/index'], resolve),
      meta: {
        title: 'menu'
      }
    }
  ]
})
