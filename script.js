class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};
//example books
const book1 = new Book('To Kill A Mockingbird', 'Harper Lee', 488, true)
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 701, false)

const shelf = document.getElementById('shelf')
const btn = document.querySelector('#addBookBtn');
const closeBtn = document.querySelector("#closeBtn");
const form = document.getElementById('form')

let myLibrary = [book1, book2]; //the library array
let newBook = []; //library to compare existing books and use to display
let removeButtonsIndex = []; //index of each new remove button created
let readButtonsIndex = []; //index of each new read button created


//Show/hide the popup window
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
    myLibrary.forEach((book) => {
        console.log(book)
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

            //create read/not read button
            let readButton = document.createElement('button');
            readButton.classList.add('readBtn');
            if (book.read) {
                readButton.textContent = 'Read';
                readButton.classList.add('green')
            } else {
                readButton.textContent = 'Not read'
                readButton.classList.add('red')
            }
            bookCard.appendChild(readButton);

            //Add functionality to switch between read/not read status
            readButton.addEventListener('click',(event)=> {
                console.log(event.target)
                let toggle = event.target;
                if (toggle.textContent === 'Read') {
                    toggle.textContent = 'Not read';
                    toggle.classList.add('red')
                    toggle.classList.remove('green')
                    //display();
                } else {
                    toggle.textContent = 'Read';
                    toggle.classList.add('green')
                    toggle.classList.remove('red')
                    //display();
                }
            })
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


//access the form inputs
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('title').value;
    //console.log(title);
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    console.log(read);
    myLibrary.push(new Book(title, author, pages, read));
    display();
    console.log(read);
    document.querySelector('#popUp').classList.remove('active');
    document.querySelector('#popUp').classList.add('inactive');
})

// const form = document.querySelector("form");

form.addEventListener("input", (event) => {
    // Each time the user types something, we check if the
    // form fields are valid.

    //Get the respective id
    const inputId = event.target.id;

    // Reset error messages
    resetErrors();

    if (!validateInput(inputId)) {
        showError(inputId);
    };
});


function resetErrors() {
    const errorSpans = document.querySelectorAll('.error.active');
    errorSpans.forEach((errorSpan) => {
      errorSpan.textContent = '';
      errorSpan.classList.remove('active');
    });
};


function showError(message) {
    const errorSpan = document.querySelector(`#${message} + .error`);
    errorSpan.textContent = message;
    errorSpan.classList.add('active');
};

function validateInput(inputId) {
    const inputElement = document.getElementById(inputId);
    return inputElement.checkValidity();
};