export default {
  getAuthors: (state, getters, rootState) => {
    return {
      ...state.authors,
      data: state.authors.data.map(author => {
        const { books: booksIds = [] } = author;
        const books = rootState.books.books.data.filter(book => booksIds.includes(book.id)).map(book => book.name);
        return {
          ...author,
          books
        };
      })
    };
  }
};
