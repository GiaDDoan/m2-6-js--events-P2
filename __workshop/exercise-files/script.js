// add js here

let myCheck = document.querySelector('.myCheck');
let form = document.querySelector('form');

let password = document.querySelector('.passwordInput');
let passwordConfirm = document.querySelector('.passwordConfirmInput');

let error = document.querySelector('.error');


form.addEventListener('submit', (event) => {
    event.preventDefault(); //Going to stop the page form refreshing
    if (myCheck.checked === false) {
        alert('You must agree to the term of services before continuing.');
    } else if (password.value.length < 10) {
        error.style.display = 'block';
        // password.style.border = 'solid 4px hsla(333deg, 100%, 44%, 0.25)';
        password.classList.add('errorAdd');
    } else if (password.value !== passwordConfirm.value) {
        clearErrors();
        // passwordConfirm.style.border = 'solid 4px hsla(333deg, 100%, 44%, 0.25)';
        passwordConfirm.classList.add('errorAdd');
        error.style.display = 'block';
        error.innerText = 'Password and confirm password does not match.';
    } else {
        clearErrors();
    }
    
})

// function clearErrors() {
//     password.style.border = '2.7px lightgray solid';
//     passwordConfirm.style.border = '2.7px lightgray solid';
//     error.style.display = 'none';
// } //It works, but it's kinda ugly

function clearErrors() {
    password.classList.remove('errorAdd');
    passwordConfirm.classList.remove('errorAdd');
    error.style.display = 'none';
}



// console.log(password);
// console.log(passwordConfirm);
// console.log(error);