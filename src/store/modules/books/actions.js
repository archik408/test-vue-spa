import Vue from 'vue';
import { createBook, getBooks, getBook, removeBook, updateBook } from '../../../services/api/books';

export default {
  getBooks({ commit, state }) {
    Vue.commitPromise({
      state,
      commit,
      mutation: 'setBooks',
      promise: getBooks,
      namespace: 'books'
    });
  },
  getBook({ commit, state }, id) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'setBook',
        promise: getBook,
        namespace: 'book'
      },
      id
    );
  },
  removeBook({ commit, state }, id) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'removeBook',
        promise: removeBook,
        namespace: 'deletedBook'
      },
      id
    );
  },
  updateBook({ commit, state }, data) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'updateBook',
        promise: updateBook,
        namespace: 'updatedBook'
      },
      data
    );
  },
  createBook({ commit, state }, data) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'createBook',
        promise: createBook,
        namespace: 'createdBook'
      },
      data
    );
  }
};
