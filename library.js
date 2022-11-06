let myLibrary = [];


// the book constructor
function Book(id, title, author, pages, status) {

    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}


// the add-book function
function addBookToLibrary() {

    // book info
    const bookTitle = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = Number(document.getElementById("pages").value);
    const status = document.querySelector('input[name="status"]:checked').value;
    const display = document.querySelector('.display');

    // create new book
    const book = new Book(bookTitle, author, pages, status);
    myLibrary.push(book);

    // display
    closeForm();

    // new book create card
    let card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', myLibrary.indexOf(book));
    display.appendChild(card);

    // create card body
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // add content
    let title = document.createElement('h5');
    title.innerHTML = book.title;
    cardBody.appendChild(title);

    let content = document.createElement('p');
    content.innerHTML = book.author + ', ' + book.pages + ' pages\n[' + book.status + ']';
    cardBody.appendChild(content);

    // delete button
    let del = document.createElement('button');
    del.setAttribute('type', 'button');
    del.setAttribute('class', 'del-book');
    del.innerHTML = "Remove";
    cardBody.appendChild(del);

    // add to card
    card.appendChild(cardBody);
}


// new book form
const newBookForm = function() {
    document.querySelector(".add-book-form").style.display = "block";
    document.querySelector(".new-book").style.display = "none";
    document.querySelector(".display").style.display = "none";
};


// close form
function closeForm() {
    document.querySelector(".add-book-form").style.display = "none";
    document.querySelector(".new-book").style.display = "block";
    document.querySelector('.display').style.display = "block";
}

// the display-book function
function displayBooks() {
    const display = document.querySelector('.display');
    for (let i = 0; i < myLibrary.length; i++) {
        // create card
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', i);
        display.appendChild(card);

        // create card body
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // add content
        let title = document.createElement('h5');
        title.innerHTML = myLibrary[i].title;
        cardBody.appendChild(title);

        let content = document.createElement('p');
        content.innerHTML = myLibrary[i].author + ', ' + myLibrary[i].pages + ' pages\n[' + myLibrary[i].status + ']';
        cardBody.appendChild(content);

        // delete button
        let del = document.createElement('button');
        del.setAttribute('type', 'button');
        del.setAttribute('class', 'del-book');
        del.innerHTML = "Remove";
        cardBody.appendChild(del);

        // add to card
        card.appendChild(cardBody);
    }
}


// library
document.addEventListener('DOMContentLoaded', (event) => {

    displayBooks();
    const newBook = document.querySelector("#new-book-button");
    const form = document.querySelector(".add-book-form");

    newBook.addEventListener("click", newBookForm);
    form.addEventListener("submit", e => {
        e.preventDefault();
        addBookToLibrary();
        document.getElementById("add-form").reset(); // reset the form
    });
});



// manually adding new books
const b1 = new Book("The Hobbit", "J. R. R. Tolkien", 310, "read");
myLibrary.push(b1);

const b2 = new Book("Romeo and Juliet", "William Shakespeare", 92, "unread");
myLibrary.push(b2);

const b4 = new Book("The Hobbit", "J. R. R. Tolkien", 310, "read");
myLibrary.push(b4);

const b3 = new Book("The Hobbit", "J. R. R. Tolkien", 310, "read");
myLibrary.push(b3);




