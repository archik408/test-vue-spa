import Vue from 'vue';
import { createBook, getBooks, removeBook, updateBook } from '../../../services/api/books';

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

