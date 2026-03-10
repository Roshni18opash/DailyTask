var loginForm = document.getElementById("loginForm");
var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var message = document.getElementById("msg");
var uname_error = document.getElementById("uname_error");
var email_error = document.getElementById("email_error");
var pw_error = document.getElementById("pw_error");
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //clear previous msg
    if (uname_error)
        uname_error.textContent = "";
    if (pw_error)
        pw_error.textContent = "";
    if (email_error)
        email_error.textContent = "";
    if (message)
        message.textContent = "";
    var isvalid = true;
    //uname validation
    if (!username || username.value.trim() === "") {
        uname_error && (uname_error.textContent = "Username is Required!");
        isvalid = false;
    }
    //email validation
    if (!email || email.value.trim() === "") {
        email_error && (email_error.textContent = "Email is Required!");
        isvalid = false;
    }
    //password validation
    if (!password || password.value.trim().length < 6) {
        pw_error && (pw_error.textContent = "Password must be atleast 6 characters!");
        isvalid = false;
    }
    if (isvalid) {
        message && (message.textContent = "Login Successfull!");
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.reset();
    }
    window.location.href = "home.html";
});
