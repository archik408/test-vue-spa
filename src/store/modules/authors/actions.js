import Vue from 'vue';
import { getAuthors, removeAuthor, updateAuthor, createAuthor } from '../../../services/api/authors';

export default {
  getAuthors({ commit, state }) {
    Vue.commitPromise({
      state,
      commit,
      mutation: 'setAuthors',
      promise: getAuthors,
      namespace: 'authors'
    });
  },
  removeAuthor({ commit, state }, id) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'removeAuthor',
        promise: removeAuthor,
        namespace: 'deletedAuthor'
      },
      id
    );
  },
  updateAuthor({ commit, state }, data) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'updateAuthor',
        promise: updateAuthor,
        namespace: 'updatedAuthor'
      },
      data
    );
  },
  createAuthor({ commit, state }, data) {
    Vue.commitPromise(
      {
        state,
        commit,
        mutation: 'createAuthor',
        promise: createAuthor,
        namespace: 'createdAuthor'
      },
      data
    );
  }
};
