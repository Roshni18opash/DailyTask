// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", function () {
    // Strictly type DOM elements
    var usernameInput = document.getElementById("username");
    var ageInput = document.getElementById("age");
    var saveBtn = document.getElementById("saveBtn");
    var errorMsg = document.getElementById("error");
    // Stop execution if any element is missing
    if (!usernameInput || !ageInput || !saveBtn || !errorMsg) {
        console.error("Required DOM elements not found!");
        return;
    }
    // Validation function
    function validateUser(user) {
        if (user.username.trim().length < 3)
            return "Username must be at least 3 characters";
        if (user.age < 18 || user.age > 60)
            return "Age must be between 18 and 60";
        return null;
    }
    // Load saved user from localStorage
    var savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
        var user = JSON.parse(savedProfile);
        usernameInput.value = user.username;
        ageInput.value = String(user.age);
    }
    // Save profile handler
    function saveProfile() {
        // Clear previous error
        errorMsg.textContent = "";
        usernameInput.classList.remove("error");
        ageInput.classList.remove("error");
        var user = {
            username: usernameInput.value,
            age: Number(ageInput.value),
        };
        var error = validateUser(user);
        if (error) {
            errorMsg.textContent = error;
            if (user.username.trim().length < 3)
                usernameInput.classList.add("error");
            if (user.age < 18 || user.age > 60)
                ageInput.classList.add("error");
            return;
        }
        // Save to localStorage
        localStorage.setItem("userProfile", JSON.stringify(user));
        alert("Profile saved successfully!\nUsername: ".concat(user.username, "\nAge: ").concat(user.age));
    }
    // Attach event listener
    saveBtn.addEventListener("click", saveProfile);
});
