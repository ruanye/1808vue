import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo.vue'),
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('./views/Demo1.vue'),
    },
    {
      path: '/vant',
      name: 'vant',
      component: () => import('./views/Vant.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue'),
    },
    {
      path: '/list1',
      name: 'list1',
      component: () => import('./views/List1.vue'),
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/Detail.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/Car.vue'),
    },
    {
      path: '/*',
      redirect: '/',
    },
  ],
});
