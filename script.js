let myLibrary = [];

const container = document.querySelector('#container');


class Book{
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    myLibrary.push(Book);
}

function loopMyLibrary() {
    myLibrary.map(book => {
        const div = document.createElement('div');
        div.classList.add('book' + [book])
        container.appendChild(div)
    })
}