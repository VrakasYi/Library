//example books
const book1 = new Book('To Kill A Mockingbird', 'Harper Lee', 488, 'on')
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 701, 'off')

const shelf = document.getElementById('shelf')
const btn = document.querySelector('#addBookBtn');
const closeBtn = document.querySelector("#closeBtn");
const form = document.getElementById('form')

let myLibrary = [book1, book2]; //the library array
let newBook = []; //library to compare existing books
let removeButtonsIndex = []; //index of each new remove button created
let readButtonsIndex = []; //index of each new read button created

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

//create divs with book info taken from the library array
function display() {
    myLibrary.forEach((book, index) => {
        //console.log(book)
        if (!newBook.includes(book)) {
            let bookCard = document.createElement('div');
            bookCard.classList.add('shelfCard');
            shelf.appendChild(bookCard);
            
            bookCard.appendChild(document.createElement('div')).textContent = book.title;
            bookCard.appendChild(document.createElement('div')).textContent = book.author;
            bookCard.appendChild(document.createElement('div')).textContent = book.pages;

            //add a button with class and text in 1 line
            // bookCard.appendChild(readButton = document.createElement('button'))
            // .textContent = 'Read', readButton.classList.add('readBtn')
            let readButton = document.createElement('button');
            readButton.classList.add('readBtn');
            if (book.read === 'on') {
                readButton.textContent = 'Read';
            } else {
                readButton.textContent = 'Not read'
            }
            bookCard.appendChild(readButton);
            readButtonsIndex.push(readButton);


            //same in 4 lines
            let removeBtn = document.createElement('button');
            removeBtn.classList.add('removeBtn');
            removeBtn.textContent = 'Remove'
            bookCard.appendChild(removeBtn);    
            removeButtonsIndex.push(removeBtn);// Store the button reference

            newBook.push(book);
            removeBooks();
            console.log(book);
        }
    })
}
display();


function removeBooks() {
    removeButtonsIndex.forEach((removeBtn, index)=> {
        removeBtn.addEventListener('click',(event)=> {
            console.log(index);
            let cardRemove = event.target.parentElement;
            myLibrary.splice(index, 1);
            removeButtonsIndex.splice(index, 1);
            cardRemove.remove();
            console.log(removeButtonsIndex)
            display();
        })
    })
}
//Toggle read
function readStatus(){
    readButtonsIndex.forEach((readButton, index)=> {
        readButton.addEventListener('click',(event)=> {
            console.log(event.target)
            toggle = event.target;
            if (toggle.textContent === 'Read') {
                toggle.textContent = 'Not read';
            } else {
                toggle.textContent = 'Read';
            }
        })
    })
    
}
readStatus()

//access the form inputs
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    //console.log(title);
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    myLibrary.push(new Book(title, author, pages, read));
    display();
    console.log(read);
})