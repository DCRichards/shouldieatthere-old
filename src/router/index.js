import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Establishment from '@/views/Establishment';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/establishment',
      component: Establishment,
    },
  ],
});
