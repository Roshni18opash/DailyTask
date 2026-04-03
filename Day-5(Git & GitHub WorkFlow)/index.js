var loginForm = document.getElementById("loginForm");
var username = document.getElementById("username");
var password = document.getElementById("password");
var userError = document.getElementById("uname-error");
var passwordError = document.getElementById("pwerror");
var successmsg = document.getElementById("msg");
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //clear previous msg
    if (userError)
        userError.textContent = "";
    if (passwordError)
        passwordError.textContent = "";
    if (successmsg)
        successmsg.textContent = "";
    var isvalid = true;
    //uname validation
    if (!username || username.value.trim() === "") {
        userError && (userError.textContent = "Username is Required!");
        isvalid = false;
    }
    if (!password || password.value.trim().length < 6) {
        passwordError && (passwordError.textContent = "Password must be atleast 6 characters!");
        isvalid = false;
    }
    if (isvalid) {
        successmsg && (successmsg.textContent = "Login Successfull!");
        loginForm === null || loginForm === void 0 ? void 0 : loginForm.reset();
    }
});
