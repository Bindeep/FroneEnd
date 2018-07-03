import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import About from './views/About.vue'
import BlogIndex from './components/blogindex.vue'
import BlogDetail from './components/BlogDetail.vue'
import ArticlePost from './components/ArticlePost.vue'

Vue.use(Router)

export default new Router({
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
      component: BlogDetail,
      props: true
    },
    {
      path: '/post/',
      name: 'postArticle',
      component: ArticlePost
    }
  ],
  mode: 'history'
})
