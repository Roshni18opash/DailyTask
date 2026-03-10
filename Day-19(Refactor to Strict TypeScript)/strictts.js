// DOM elements with strict typing
var usernameInput = document.getElementById("username");
var ageInput = document.getElementById("age");
var saveBtn = document.getElementById("saveBtn");
var errorText = document.getElementById("error");
// Show error
function showError(message) {
    errorText.textContent = message;
}
// Clear error
function clearError() {
    errorText.textContent = "";
}
// Validate and save data
function saveUser() {
    try {
        var username = usernameInput.value.trim();
        var age = Number(ageInput.value);
        if (!username || !age) {
            showError("All fields are required");
            return;
        }
        if (username.length < 3) {
            showError("Username must be at least 3 characters");
            return;
        }
        if (age < 18 || age > 60) {
            showError("Age must be between 18 and 60");
            return;
        }
        clearError();
        alert("Data saved successfully!");
    }
    catch (error) {
        showError("Unexpected error occurred");
        console.error(error);
    }
}
// Event binding
saveBtn.addEventListener("click", saveUser);
