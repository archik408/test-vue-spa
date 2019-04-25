export default {
  setBooks(state, payload) {
    state.books = payload;
  },
  setBook(state, payload) {
    state.book = payload;
  },
  removeBook(state, payload) {
    state.deletedBook = payload;
    state.books = { ...state.books, data: state.books.data.filter(book => book.id !== payload.data.id) };
  },
  updateBook(state, payload) {
    state.updatedBook = payload;
    if (!payload.loading && !payload.error) {
      const existBookIndex = state.books.data.findIndex(b => b.id === payload.data.id);
      state.books.data[existBookIndex] = payload.data;
      state.books = { ...state.books };
    }
  },
  createBook(state, payload) {
    state.createdBook = payload;
    if (!payload.loading && !payload.error) {
      state.books.data.push(payload.data);
    }
  }
};
