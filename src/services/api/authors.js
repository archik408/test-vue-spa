const backendMock = {
  authors: [
    {
      id: 1,
      firstName: 'Stephen',
      lastName: 'King',
      books: [1, 2, 3, 4]
    },
    {
      id: 2,
      firstName: 'Robert',
      lastName: 'Louis Stevenson',
      books: [5, 6, 7]
    }
  ]
};

// TODO bind to real backe-end endpoints and replace mockup
export function getAuthors() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data: [...backendMock.authors]
        }),
      1200
    );
  });
}

// TODO bind to real backe-end endpoints and replace mockup
export function removeAuthor(id) {
  backendMock.authors = backendMock.authors.filter(a => a.id !== id);
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data: { id }
        }),
      1200
    );
  });
}

// TODO bind to real backe-end endpoints and replace mockup
export function updateAuthor(data) {
  const existAuthorIndex = backendMock.authors.findIndex(a => a.id === data.id);
  backendMock.authors[existAuthorIndex] = data;
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data
        }),
      1200
    );
  });
}

// TODO bind to real backe-end endpoints and replace mockup
export function createAuthor(data) {
  data.id = Date.now();
  backendMock.authors.push(data);
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data
        }),
      1200
    );
  });
}
