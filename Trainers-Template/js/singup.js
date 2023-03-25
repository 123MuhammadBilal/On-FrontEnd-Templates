// form validation

const firstNameInput = document.getElementById("inputNameFirst");
const lastNameInput = document.getElementById("inputNameLast");
const emailInput = document.getElementById("inputText");
const passwordInput = document.getElementById("inputPass");

const inputNameFirstValidation = document.getElementById("inputNameFirstValidation");
const inputNameLastValidation = document.getElementById("inputNameLastValidation");
const inputTextValidation = document.getElementById("inputTextValidation");
const inputPassValidation = document.getElementById("inputPassValidation");

const form = document.querySelector("form");
const submit = document.getElementById("submit");


firstNameInput.addEventListener("blur", () => {
if (firstNameInput.value.length < 2 || firstNameInput.value.length > 9) {
inputNameFirstValidation.innerHTML ="Last name must be more 2 characters and less then 9";
} else {
inputNameFirstValidation.innerHTML = "";
}
});

lastNameInput.addEventListener("blur", () => {
if (lastNameInput.value.length < 2 || lastNameInput.value.length > 9) {
inputNameLastValidation.innerHTML =
"Last name must be more 2 characters and less then 9";
} else {
inputNameLastValidation.innerHTML = "";
}
});

// Validate email (must be a valid email address)
emailInput.addEventListener("blur", () => {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regex.test(emailInput.value)) {
inputTextValidation.innerHTML = "Please enter a valid email address";
} else {
inputTextValidation.innerHTML = "";
}
});

passwordInput.addEventListener("blur", () => {
if (passwordInput.value.length < 8 || passwordInput.value.length > 15) {
inputPassValidation.innerHTML = "Password must be at least 8 characters and no more than 15 characters long.";
} else {
inputPassValidation.innerHTML = "";
}
});
// add an event listener to the button
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // prevent the form from submitting
    if (
firstNameInput.value.length >= 2 &&
firstNameInput.value.length <= 9 &&
lastNameInput.value.length >= 2 &&
lastNameInput.value.length <= 9 &&
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) &&
passwordInput.value.length >= 8 &&
passwordInput.value.length <= 15
){
        location.replace('index.html');
    } else {
        inputPassValidation.innerHTML = "Please fill the form carefully";
    }
});