const backendMock = {
  books: [
    {
      id: 1,
      name: 'The Green Mile'
    },
    {
      id: 2,
      name: 'The Dark Tower'
    },
    {
      id: 3,
      name: 'Carrie'
    },
    {
      id: 4,
      name: 'Misery'
    },
    {
      id: 5,
      name: 'Treasure Island'
    },
    {
      id: 6,
      name: 'Kidnapped'
    },
    {
      id: 7,
      name: 'Strange Case of Dr Jekyll and Mr Hyde'
    }
  ]
};

// TODO bind to real backe-end endpoints and replace mockup
export function getBooks() {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data: [...backendMock.books]
        }),
      1200
    );
  });
}

// TODO bind to real backe-end endpoints and replace mockup
export function getBook(id) {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          data: { ...backendMock.books.find(b => b.id == id) }
        }),
      1200
    );
  });
}

// TODO bind to real backe-end endpoints and replace mockup
export function removeBook(id) {
  backendMock.books = backendMock.books.filter(b => b.id !== id);
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
export function updateBook(data) {
  const existBookIndex = backendMock.books.findIndex(b => b.id == data.id);
  backendMock.books[existBookIndex] = data;
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
export function createBook(data) {
  data.id = Date.now();
  backendMock.books.push(data);
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
