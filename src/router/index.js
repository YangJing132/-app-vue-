import Vue from 'vue'
import Router from 'vue-router'

import Pages from '../views/pages/pages'//
import HomeView from '../views/home/homeView'//首页
import MovieView from '../views/movie/movieView'//电影
import BookView from '../views/book/bookView'//书籍
import StatusView from '../views/status/statusView'//广播
import GroupView from '../views/group/groupView'//小组
// import SubjectView from '../views/SubjectView'
import DetailView from '../views/detail/detailView'//详情
// import SearchView from '../views/SearchView'
import LoginView from '../views/login/loginView'//登录
import RegisterView from '../views/register/registerView'//注册

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: Pages,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
        {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
        }
      ]
    },
    // {
    //   path: '/pages/:classify/subject/:id',
    //   name: 'SubjectView',
    //   components: {
    //     default: PagesView,
    //     subject: SubjectView
    //   }
    // },
    // {
    //   path: '/search',
    //   name: 'SearchView',
    //   components: {
    //     default: PagesView,
    //     search: SearchView
    //   }
    // },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
