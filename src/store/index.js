import Vue from 'vue';
import Vuex from 'vuex';

import books from './modules/books';
import authors from './modules/authors';
// import createLogger from '../../../src/plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    books,
    authors
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
});
