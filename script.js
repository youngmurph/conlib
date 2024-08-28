const submit = document.getElementById("submit");
const body = document.querySelector("body");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const modal = document.getElementsByClassName("modal");
const error = "Error, you must specify a number of pages.";

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
    if (myLibrary.length < 1) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        body.prepend(modal);
        modal.prepend(myLibrary);
    }
    let newBook = new Book(bookTitle, bookAuthor, bookPages, read);

    myLibrary.push(newBook);
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = myLibrary[i];
        document.querySelector('.modal').innerHTML += bookCard;
        break;
    }
    console.log(myLibrary);
} 

submit.addEventListener("click", () => {
    addBookToLibrary(Book);
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
})