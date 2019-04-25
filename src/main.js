import Vue from 'vue';
import VueRouter from 'vue-router';

import Book from './pages/Book';
import Home from './pages/Home';
import Books from './pages/Books';
import Page404 from './pages/404';
import Login from './pages/Login';
import Authors from './pages/Authors';

import store from './store';
import './config';
import './common.css';

const routes = [
  { path: '/', component: Home },
  { path: '/books', component: Books },
  { path: '/book', component: Book, props: true },
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
