var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");
var saveBtn = document.getElementById("saveBtn");
var errorText = document.getElementById("error");
function showError(message) {
    errorText.textContent = message;
    nameInput.classList.add("error");
    ageInput.classList.add("error");
    emailInput.classList.add("error");
}
function clearError() {
    errorText.textContent = "";
    nameInput.classList.remove("error");
    ageInput.classList.remove("error");
    emailInput.classList.remove("error");
}
function validateProfile() {
    try {
        var name_1 = nameInput.value.trim();
        var age = Number(ageInput.value);
        var email = emailInput.value.trim();
        if (!name_1 || !age || !email) {
            showError("All fields are required");
            return;
        }
        if (name_1.length < 3) {
            showError("Name must be at least 3 characters");
            return;
        }
        if (age < 18 || age > 60) {
            showError("Age must be between 18 and 60");
            return;
        }
        if (email.indexOf("@") === -1) {
            showError("Invalid email address");
            return;
        }
        clearError();
        alert("Profile updated successfully");
    }
    catch (error) {
        showError("Unexpected error occurred");
        console.error(error);
    }
}
saveBtn.addEventListener("click", validateProfile);
