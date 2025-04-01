let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

// Crear un libro
function addBook(title, author) {
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author
    };
    books.push(newBook);
    renderBooks();
}

// Leer los libros (mostrar en pantalla)
function renderBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';  // Limpiar la lista

    books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(bookItem);
    });
}

// Actualizar un libro
function updateBook(id, newTitle, newAuthor) {
    const book = books.find(book => book.id === id);
    if (book) {
        book.title = newTitle;
        book.author = newAuthor;
        renderBooks();
    }
}

// Eliminar un libro
function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    renderBooks();
}

// Conectar formulario para agregar libros
document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    addBook(title, author);
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
});

// Renderizar los libros iniciales
renderBooks();
