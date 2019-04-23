import Vue from 'vue';
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Book from './pages/Book';
import Home from './pages/Home';
import Books from './pages/Books';
import Page404 from './pages/404';
import Login from './pages/Login';
import Authors from './pages/Authors';

import store from './store';
import promiseCommitter from './plugins/promiseCommitter';

library.add(faTrashAlt);
library.add(faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);
Vue.use(promiseCommitter);

const routes = [
  { path: '/', component: Home },
  { path: '/books', component: Books },
  { path: '/book', component: Book },
  { path: '/book/:id', component: Book },
  { path: '/authors', component: Authors },
  { path: '/login', component: Login },
  { path: '*', component: Page404 }
];

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  store,
  router
}).$mount('#app');
