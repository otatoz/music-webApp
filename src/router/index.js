import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'
import {getToken} from '../utils/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/login/phoneLogin',
    name:'phoneLogin',
    component:()=> import('../views/login/PhoneLogin')
  },
  {
    path:'/login/login',
    name:'login',
    component:()=> import('../views/login/Login')
  },
  {
    path:'/login/passwordLogin',
    name:'passwordLogin',
    component:()=> import('../views/login/PasswordLogin')
  },
  {
    path:'/home',
    name:'home',
    component:()=> import('../views/music/HomePage'),
    beforeEnter: (to,from,next) => {
      let token = getToken();
      if(token){
        // 查询用户详情
        store.dispatch('login/detail',token)
        .then(()=>{
          // 当获取完用户信息之后才允许跳转
          next();
        })
      } else {
        // 跳转到登录
        next({path:'/'})
      }
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
