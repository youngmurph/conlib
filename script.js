const submit = document.getElementById("submit");
const error = "Error, you must specify a number of pages.";
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const card = document.getElementById("card");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(Book) {
    let bookTitle = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let read = document.getElementById("read");
    if (read.checked === true) {
        read = "Yes";
    } else {
        read = "Not yet";
    }
    let newBook = new Book(bookTitle, bookAuthor, bookPages, read);
    let bookCard = document.createElement('div');
    myLibrary.push(newBook);
    console.log(myLibrary);
} 

submit.addEventListener("click", () => {
    addBookToLibrary(Book);
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
})


