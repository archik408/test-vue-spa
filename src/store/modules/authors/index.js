import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  authors: { data: [], loading: false, error: null },
  deletedAuthor: { data: {}, loading: false, error: null },
  createdAuthor: { data: {}, loading: false, error: null },
  updatedAuthor: { data: {}, loading: false, error: null }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
