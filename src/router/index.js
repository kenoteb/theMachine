import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import Dashboard from '@/pages/Dashboard';
import Roulette from '@/pages/Roulette';
import Members from '@/pages/Members';
import Member from '@/pages/Member';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello,
      meta: {
        permission: 'unauth',
        fail: '/dashboard'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        permission: 'president|judge|wjmanager',
        fail: '/'
      }
    },
    {
      path: '/roulette',
      name: 'roulette',
      component: Roulette,
      meta: {
        permission: 'president',
        fail: '/'
      }
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
      meta: {
        permission: 'president|judge|wjmanager',
        fail: '/'
      }
    },
    {
      path: '/members/:id',
      name: 'member',
      component: Member,
      meta: {
        permission: 'president|judge|wjmanager',
        fail: '/'
      }
    }
  ]
});
