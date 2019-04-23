export default {
  setAuthors(state, payload) {
    state.authors = payload;
  },
  removeAuthor(state, payload) {
    state.deletedAuthor = payload;
    state.authors = { ...state.authors, data: state.authors.data.filter(author => author.id !== payload.data.id) };
  },
  updateAuthor(state, payload) {
    state.updatedAuthor = payload;
    if (!payload.loading && !payload.error) {
      const existAuthorIndex = state.authors.data.findIndex(a => a.id === payload.data.id);
      state.authors.data[existAuthorIndex] = payload.data;
      state.authors = { ...state.authors };
    }
  },
  createAuthor(state, payload) {
    state.createdAuthor = payload;
    if (!payload.loading && !payload.error) {
      state.authors.data.push(payload.data);
    }
  }
};
