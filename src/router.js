import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import About from './views/About.vue'
import BlogIndex from './components/blogindex.vue'
import BlogDetail from './components/BlogDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'blogIndex',
      component: BlogIndex
    },
    {
      path: '/blog/:id',
      name: 'blogDetail',
      component: BlogDetail
    }
  ]
})
