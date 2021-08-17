let myLibrary = [];

const container = document.querySelector('#container');
const addBtn = document.querySelector('.addBtn');

class Book{
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
   
    let book = {
        id: new Book(),
        title: document.querySelector('[data-title]').value,
        title: document.querySelector('[data-author]').value,
        title: document.querySelector('[data-pages]').value,
        title: document.querySelector('[data-read]').value,
    }

    myLibrary.push(book);
}

function loopMyLibrary() {
    myLibrary.map(book => {
        const div = document.createElement('div');
        div.classList.add('book' + [book])
        container.appendChild(div)
    })
}


addBtn.addEventListener('click', addBookToLibrary)