//example books
const book1 = new Book('To Kill A Mockingbird', 'Harper Lee', 488, true)
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 701, false)

const btn = document.querySelector('#addBookBtn');
const closeBtn = document.querySelector("#closeBtn");
let myLibrary =['book1', 'book2'];
let title;
let author;
let pages;
let read;

console.log(btn);
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

btn.addEventListener("click", () => {
    document.querySelector('#popUp').classList.remove('inactive');
    document.querySelector('#popUp').classList.add('active');
})

closeBtn.addEventListener('click', () => {
    document.querySelector('#popUp').classList.remove('active');
    document.querySelector('#popUp').classList.add('inactive');
})

