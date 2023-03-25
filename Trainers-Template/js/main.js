//onload addEventListener
window.addEventListener("load", () => {
  //select input name first
  const inputNameFirst = document.querySelector("#inputNameFirst");
  //select input name last
  const inputNameLast = document.querySelector("#inputNameLast");
  //select input mail
  const inputGmail = document.querySelector("#inputText");
  //select input pass
  const inputPass = document.querySelector("#inputPass");

  //working on mainProfile

  const mainName = document.getElementById("mainName");
  const mainMail = document.getElementById("mainMail");

  const innerFname = document.getElementById("innerFname");
  const innerFnameGot = document.getElementById("innerFnameGot");

  const innerLname = document.getElementById("innerLname");
  const innerLnameGot = document.getElementById("innerLnameGot");

  const innerGmail = document.getElementById("innerGmail");
  const innerGmailGot = document.getElementById("innerGmailGot");

  const innerPass = document.getElementById("innerPass");
  const innerPassGot = document.getElementById("innerPassGot");
  const mainEdit = document.getElementById("mainEdit");

  // selected <form>
  const form = document.querySelector("#taskForm");

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

  // const form = document.querySelector("form");
  // const submit = document.getElementById("submit");

  //select for output
  const outputChild = document.getElementById("appendTrainer");

  const btn = document.getElementById("submit");
  btn.value = "Signup";

  // Validate first name (must be at least 2 characters long)
  firstNameInput.addEventListener("blur", () => {
    if (firstNameInput.value.length < 2) {
      inputNameFirstValidation.innerHTML =
        "First name must be at least 2 characters long";
    } else {
      inputNameFirstValidation.innerHTML = "";
    }
  });

  // Validate last name (must be at least 2 characters long)
  lastNameInput.addEventListener("blur", () => {
    if (lastNameInput.value.length < 2) {
      inputNameLastValidation.innerHTML =
        "Last name must be at least 2 characters long";
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

  // Validate password (must be at least 8 characters long)
  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value.length < 8) {
      inputPassValidation.innerHTML =
        "Password must be at least 8 characters long";
    } else {
      inputPassValidation.innerHTML = "";
    }
  });

  form.addEventListener("submit", (refresh) => {
    //stop to refresh page on submit
    refresh.preventDefault();
    //validations checking
    if (
      firstNameInput.value.length >= 2 &&
      lastNameInput.value.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value) &&
      passwordInput.value.length >= 8
    ) {
      // submit form

      //creating <div>
      const li = document.createElement("li");
      li.id = "liClicker";

      const img = document.createElement("img");
      img.src = "imgs/trainer 30x30.png";

      //creating <span>
      const nameF = document.createElement("span");
      //creating <span>
      const nameL = document.createElement("span");
      //creating <p>
      const mailG = document.createElement("p");
      //creating <h4>
      const passW = document.createElement("h4");
      passW.style.display = "none";

      //gettin <inputNameFirst.value> from "form"
      const firstName = document.createTextNode(inputNameFirst.value + " ");
      //gettin <inputNameFirst.value> from "form"
      const lastName = document.createTextNode(inputNameLast.value);
      //gettin <input.value> from "form"
      const Gmail = document.createTextNode(inputGmail.value);
      //gettin <input.value> from "form"
      const Passwords = document.createTextNode(inputPass.value);

      //creating delete "button"
      const delBtn = document.createElement("i");
      delBtn.className = "fa fa-ellipsis-h";

      //creating edit "button"
      const edtBtn = document.createElement("i");
      edtBtn.className = "fa fa-pencil";

      //appending inputNameFirst.vale in list
      nameF.appendChild(firstName);
      //appending inputNamelast.vale in list
      nameL.appendChild(lastName);
      //appending input.vale in list
      mailG.appendChild(Gmail);
      //appending input.vale in list
      passW.appendChild(Passwords);

      //appending input.vale in list
      li.appendChild(img);

      //appending input.vale in list
      li.appendChild(nameF);

      //appending input.vale in list
      li.appendChild(nameL);

      //appending input.vale in list
      li.appendChild(mailG);

      //appending input.vale in list
      li.appendChild(passW);

      //appending "edit btn" in list
      li.appendChild(edtBtn);
      //appending "checkbox btn" in list
      li.appendChild(delBtn);
      container_trainer_add.style.display = "none";
      //appending <li> in output
      outputChild.appendChild(li);
      inputNameFirst.value = "";
      inputNameLast.value = "";
      inputGmail.value = "";
      inputPass.value = "";

      //main id showing in main banner
      li.addEventListener("click", () => {
        const banner = document.getElementById("banner");
        if ((banner.style.display = "none")) {
          banner.style.display = "block";
        } else {
          banner.style.display = "none";
        }
        mainName.innerHTML = nameF.innerHTML + " " + nameL.innerHTML;
        mainMail.innerHTML = mailG.innerHTML;

        innerFname.innerHTML = "First Name";
        innerFnameGot.innerHTML = nameF.innerHTML;

        innerLname.innerHTML = "Last Name";
        innerLnameGot.innerHTML = nameL.innerHTML;

        innerGmail.innerHTML = "Gmail";
        innerGmailGot.innerHTML = mailG.innerHTML;

        innerPass.innerHTML = "Password";
        innerPassGot.innerHTML = passW.innerHTML;
      });

      //addEventListener on "DELL" button
      delBtn.addEventListener("click", () => {
        outputChild.removeChild(li);
      });

      //addEventListener on "EDIT" button
      edtBtn.addEventListener("click", () => {
        inputNameFirst.value = nameF.innerHTML;
        inputNameLast.value = nameL.innerHTML;
        inputGmail.value = mailG.innerHTML;
        inputPass.value = passW.innerHTML;

        //append button to save editable element
        const saveme = document.createElement("button");
        saveme.innerHTML = "Save";

        // using id for styling
        saveme.id = "SAVE";
        //hidding 'ADD' button
        btn.style.display = "none";
        form.appendChild(saveme);
        container_trainer_add.style.display = "block";

        saveme.addEventListener("click", () => {
          // update the values in the list
          nameF.innerHTML = inputNameFirst.value + " ";
          nameL.innerHTML = inputNameLast.value;
          mailG.innerHTML = inputGmail.value;
          passW.innerHTML = inputPass.value;

          // remove the "SAVE" button and show the "ADD" button
          form.removeChild(saveme);
          btn.style.display = "block";

          // clear the input fields
          inputNameFirst.value = "";
          inputNameLast.value = "";
          inputGmail.value = "";
          inputPass.value = "";
          container_trainer_add.style.display = "none";
          li.click();
        });
      });

      mainEdit.addEventListener("click", () => {
        inputNameFirst.value = nameF.innerHTML;
        inputNameLast.value = nameL.innerHTML;
        inputGmail.value = mailG.innerHTML;
        inputPass.value = passW.innerHTML;

        //append button to save editable element
        const saveme = document.createElement("button");
        saveme.innerHTML = "Save";

        // using id for styling
        saveme.id = "SAVE";
        //hidding 'ADD' button
        btn.style.display = "none";

        form.appendChild(saveme);
        container_trainer_add.style.display = "block";
        saveme.addEventListener("click", () => {
          // update the values in the list
          nameF.innerHTML = inputNameFirst.value + " ";
          nameL.innerHTML = inputNameLast.value;
          mailG.innerHTML = inputGmail.value;
          passW.innerHTML = inputPass.value;

          // remove the "SAVE" button and show the "ADD" button
          form.removeChild(saveme);
          btn.style.display = "block";

          // clear the input fields
          inputNameFirst.value = "";
          inputNameLast.value = "";
          inputGmail.value = "";
          inputPass.value = "";
          container_trainer_add.style.display = "none";
          li.click();
        });
      });
    } else {
      //if my validations not complete do not submit and show
      inputPassValidation.innerHTML = "requirements not compelete";
    }
  });
});

// hide & show functions

const container_trainer_add = document.getElementById("container_trainer_add");
const addTrainers = document.getElementById("addTrainers");
const crossBtn = document.getElementById("crossBtn");
const mainCros = document.getElementById("mainCros");
const banner = document.getElementById("banner");

mainCros.addEventListener("click", () => {
  if ((banner.style.display = "block")) {
    banner.style.display = "none";
  } else {
    banner.style.display = "block";
  }
});
addTrainers.addEventListener("click", () => {
  if ((container_trainer_add.style.display = "none")) {
    container_trainer_add.style.display = "block";
  } else {
    container_trainer_add.style.display = "none";
  }
});
crossBtn.addEventListener("click", () => {
  if ((container_trainer_add.style.display = "block")) {
    container_trainer_add.style.display = "none";
  } else {
    container_trainer_add.style.display = "block";
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
