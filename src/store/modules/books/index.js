import actions from './actions';
import mutations from './mutations';

const state = {
  book: { data: {}, loading: false, error: null },
  books: { data: [], loading: false, error: null },
  deletedBook: { data: {}, loading: false, error: null },
  createdBook: { data: {}, loading: false, error: null },
  updatedBook: { data: {}, loading: false, error: null }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
