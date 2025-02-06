const books = [
  { title: 'JavaScript Avançado', author: 'Fulano', status: 'disponível' }
];

const addBook = (books, title, author) => {
  return [ ...books, { title: title, author: author, satus: 'disponível' } ];
}

// Saída: 
// [{ title: 'JavaScript Avançado', author: 'Fulano', status: 'disponível' },
// { title: 'Imutabilidade em JS', author: 'Beltrano', status: 'disponível' }] 
const addedBook = addBook([{ title: 'JavaScript Avançado', author: 'Fulano', status: 'disponível' }], 'Imutabilidade em JS', 'Beltrano'); 
console.log("Livro adicionado:", addedBook);

const updateBookStatus = (books, bookTitle, status) => {
  return books.map(book => book.title === bookTitle ? { ...book, status } : book);
}

// Saída: [{ title: 'JavaScript Avançado', author: 'Fulano', status: 'emprestado' }]
const updatedBookStatus = updateBookStatus([{ title: 'JavaScript Avançado', author: 'Fulano', status: 'disponível' }], 'JavaScript Avançado', 'emprestado');
console.log("Status de livro atualizado:", updatedBookStatus);

const removeBook = (books, bookTitle) => {
  return books.filter(book => book.title !== bookTitle);
}

// Saída: []
const removedBook = removeBook([{ title: 'JavaScript Avançado', author: 'Fulano', status: 'emprestado' }], 'JavaScript Avançado');
console.log("Livro removido:", removedBook);