// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const pages = document.getElementById("pages");

// const titleError = document.querySelector("#title + span.error");
// const authorError = document.querySelector("#author + span.error");
// const pagesError = document.querySelector("#pages + span.error");

const form = document.querySelector("form");

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
    errorSpan.textContent = `${message} is required`;
    errorSpan.classList.add('active');
};

function validateInput(inputId) {
    const inputElement = document.getElementById(inputId);
    return inputElement.checkValidity();
};