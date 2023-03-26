//    _____________________________________________________________________________
//    |                                                                           |
//    |                   [[    form validation scripts are here    ]]            |
//    | __________________________________________________________________________|



// select input values to get input
const firstNameInput = document.getElementById("inputNameFirst");
const lastNameInput = document.getElementById("inputNameLast");
const emailInput = document.getElementById("inputText");
const passwordInput = document.getElementById("inputPass");
//selection done


// select the span to show the validation
const inputNameFirstValidation = document.getElementById("inputNameFirstValidation");
const inputNameLastValidation = document.getElementById("inputNameLastValidation");
const inputTextValidation = document.getElementById("inputTextValidation");
const inputPassValidation = document.getElementById("inputPassValidation");
//selection done



//select the submit button to submit form on click
const submitBtn = document.getElementById("submit");
//selection done




//adding eventlistner on all input feild for check the validation


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



// add event listener to submit form on click

submitBtn.addEventListener("submit", (event) => {
  event.preventDefault(); 
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
    location.href('index.html')
  } else {
    inputPassValidation.innerHTML = "Please fill the form carefully";
  }
});
