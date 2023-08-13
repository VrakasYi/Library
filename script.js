//example books
const book1 = new Book('To Kill A Mockingbird', 'Harper Lee', 488, true)
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 701, false)

const shelf = document.getElementById('shelf')
const btn = document.querySelector('#addBookBtn');
const closeBtn = document.querySelector("#closeBtn");
const form = document.getElementById('form')

let myLibrary =[book1, book2];//the library array
// let title;
// let author;
// let pages;
// let read;

//book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//open/close the popup window used to submit new books                                                                                                                                                                                                                                                         
btn.addEventListener("click", () => {
    document.querySelector('#popUp').classList.remove('inactive');
    document.querySelector('#popUp').classList.add('active');
})
closeBtn.addEventListener('click', () => {
    document.querySelector('#popUp').classList.remove('active');
    document.querySelector('#popUp').classList.add('inactive');
})

//create cards with book info taken from the library array
function display() {
    myLibrary.forEach(book => {
        console.log(book.title)
        let bookCard = document.createElement('div');
        bookCard.classList.add('shelfCard');
        shelf.appendChild(bookCard);
    
        bookCard.appendChild(document.createElement('div')).textContent = book.title;
        bookCard.appendChild(document.createElement('div')).textContent = book.author;
        bookCard.appendChild(document.createElement('div')).textContent = book.pages;
        bookCard.appendChild(document.createElement('button')).textContent = 'Read';
        bookCard.appendChild(document.createElement('button')).textContent = 'Remove';
    })
}
display();

//access form inputs
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    console.log(title);
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    myLibrary.push(new Book(title, author, pages, read));
    display();
})