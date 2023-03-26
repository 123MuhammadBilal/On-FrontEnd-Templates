// form validation

const firstNameInput = document.getElementById("inputNameFirst");
const lastNameInput = document.getElementById("inputNameLast");
const emailInput = document.getElementById("inputText");
const passwordInput = document.getElementById("inputPass");

const inputNameFirstValidation = document.getElementById(
  "inputNameFirstValidation"
);
const inputNameLastValidation = document.getElementById(
  "inputNameLastValidation"
);
const inputTextValidation = document.getElementById("inputTextValidation");
const inputPassValidation = document.getElementById("inputPassValidation");

const form = document.querySelector("form");
const submit = document.getElementById("submit");

firstNameInput.addEventListener("blur", () => {
  const regex = /^[a-zA-Z ]+$/;
  const firstName = firstNameInput.value.trim();
  if (!regex.test(firstName) || firstName.length < 2 || firstName.length > 9) {
    inputNameFirstValidation.innerHTML =
    "Invalid";
  } else {
    inputNameFirstValidation.innerHTML = "";
  }
});

lastNameInput.addEventListener("blur", () => {
  const regex = /^[a-zA-Z ]+$/;
  const lastName = lastNameInput.value.trim();
  if (!regex.test(lastName) || lastName.length < 2 || lastName.length > 9) {
    inputNameLastValidation.innerHTML =
    "Invalid";
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
    inputPassValidation.innerHTML =
      "Invalid";
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
    /^[a-zA-Z ]+$/.test(firstNameInput.value.trim()) &&
    lastNameInput.value.length >= 2 &&
    lastNameInput.value.length <= 9 &&
    /^[a-zA-Z ]+$/.test(lastNameInput.value.trim()) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) &&
    passwordInput.value.length >= 8 &&
    passwordInput.value.length <= 15
  ) {
    location.replace("index.html");
  } else {
    inputPassValidation.innerHTML = "Please fill the form carefully";
  }
});



  // password checker
  const passwordField = document.getElementById("inputPass");
  const passwordToggle = document.getElementById("password-toggle");
  passwordToggle.addEventListener("click", () => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      passwordToggle.classList.remove("fa-eye");
      passwordToggle.classList.add("fa-eye-slash");
      passwordField.classList.add("eyeManage");
    } else {
      passwordField.type = "password";
      passwordToggle.classList.remove("fa-eye-slash");
      passwordToggle.classList.add("fa-eye");
      passwordField.classList.add("eyeManage");
    }
  });