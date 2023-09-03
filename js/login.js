//#region Changing login/registration page
let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
//#endregion

//#region Validate userName

let userNameField = document.getElementById("userNameId");

userNameField.addEventListener("keyup", validateUserName);

function validateUserName() {
    let userNameError = document.getElementById("error-username")
    let userNameValue = document.getElementById("userNameId").value;

    if (userNameValue == "") {
        userNameError.innerText = "Please complete the field";
        userNameError.style.color = "coral";
        return false;
    }

    if (userNameValue.length < 3) {
        userNameError.innerText = "Field should be more than 3 characters";
        userNameError.style.color = "coral";
        return false;
    }

    userNameError.innerHTML = " ";

    return true;
}
//#endregion

//#region Validate email with regex

let emailField = document.getElementById("emailId");

emailField.addEventListener("keyup", validateEmail)

function validateEmail() {
    let emailError = document.getElementById("emailError");
    let emailvalue = document.getElementById("emailId").value;
    let emailpattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (emailvalue == "") {
        emailError.innerText = "Your Emal is required";
        emailError.style.color = "coral";
        return false;
    }
    if (!emailvalue.match(emailpattern)) {
        emailError.innerText = "Your Emal is invalid";
        emailError.style.color = "coral";
        return false;
    }

    emailError.innerHTML = " ";

    return true;
}

//#endregion

//#region Validate Password


let passwordOneField = document.getElementById("passwordId");
let passwordTwoField = document.getElementById("passwordTwoId");

passwordOneField.addEventListener("keyup", validatePassOne)

function validatePassOne() {
    let passwordOneError = document.getElementById("error-passw")
    let passwordOneValue = passwordOneField.value;

    if (passwordOneValue == "") {
        passwordOneError.innerHTML = "Please complete the password field";
        passwordOneError.style.color = "coral";
        return false;
    }
    if (passwordOneValue.length < 6) {
        passwordOneError.innerHTML = "Password field minimum lenght is 6";
        passwordOneError.style.color = "coral";
        return false;
    }
    if (!hasUpperCase(passwordOneValue)) {
        passwordOneError.innerHTML = "Password must contain one Upper letter";
        passwordOneError.style.color = "coral";
        return false;
    }
    if (!hasLowerCase(passwordOneValue)) {
        passwordOneError.innerHTML = "Password must contain one Lower letter";
        passwordOneError.style.color = "coral";
        return false;
    }
    passwordOneError.innerHTML = " ";

    return true;
};


passwordTwoField.addEventListener("keyup", validatePassTwo)
function validatePassTwo() {
    let passwordTwoError = document.getElementById("error-passw-two")
    let passwordTwoValue = passwordTwoField.value;
    let passwordOneValue = passwordOneField.value;

    if (passwordOneValue != passwordTwoValue) {
        passwordTwoError.innerHTML = "Password don't match";
        passwordTwoError.style.color = "coral";
        return false;
    }

    passwordTwoError.innerHTML = "";
    return true;
};

//#endregion

//#region Validate by submit

let registrationForm = document.getElementById("formRegistration");

registrationForm.addEventListener("submit", function () {

    let userNameValid = validateUserName();
    let emailValid = validateEmail();
    let passOneValid = validatePassOne();
    let passTwovalid = validatePassTwo();

    if (!userNameValid || !emailValid || !passOneValid || !passTwovalid) {
        return;
    }
});

//#endregion

//#region Helper Methods
const hasUpperCase = str => str.match(/[A-Z]/);
const hasLowerCase = str => str.match(/[a-z]/);
//#endregion

