var form = document.getElementById("ageForm");
var username = document.getElementById("username");
var ageInput = document.getElementById("age");
var nameError = document.getElementById("nameError");
var ageError = document.getElementById("ageError");
var successMsg = document.getElementById("successMsg");
username.addEventListener("input", function () {
    if (username.value.trim() === "") {
        nameError.textContent = "Name is required";
    }
    else {
        nameError.textContent = "";
    }
});
ageInput.addEventListener("input", function () {
    var age = Number(ageInput.value);
    if (age < 18) {
        ageError.textContent = "Age must be 18 or above";
    }
    else {
        ageError.textContent = "";
    }
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = true;
    if (username.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    var age = Number(ageInput.value);
    if (age < 18 || ageInput.value === "") {
        ageError.textContent = "Valid age (18+) required";
        isValid = false;
    }
    if (isValid) {
        successMsg.textContent = "Form submitted successfully 🎉";
        form.reset();
    }
    else {
        successMsg.textContent = "";
    }
});
