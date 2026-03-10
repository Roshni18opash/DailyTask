var form = document.getElementById("loginForm");
var uname = document.getElementById("username");
var password = document.getElementById("password");
var btn = document.getElementById("btn");
var uerror = document.getElementById("uname-error");
var pwerror = document.getElementById("pwerror");
var text = document.getElementById("success_msg");
//Username validation
if (form && uname && password && uerror && pwerror && text && btn) {
    uname.addEventListener("input", function (event) {
        var value = event.target.value;
        if (value.length < 3) {
            uerror.textContent = "Minimum  three Characters required!";
        }
        else {
            uerror.textContent = "";
        }
    });
    //password validation
    password.addEventListener("input", function (event) {
        var value = event.target.value;
        var strong_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
        if (!strong_pw.test(value)) {
            pwerror.textContent = "Password must be at least 6 characters with uppercase, number & symbol";
        }
        else {
            pwerror.textContent = "";
        }
    });
    //focus blur event
    uname.addEventListener("focus", function () {
        uerror.textContent = "Enter UserName";
    });
    uname.addEventListener("blur", function () {
        uerror.textContent = "";
    });
    btn.addEventListener("click", function () {
        console.log("Loging button clicked!");
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var isvalid = true;
        if (uname.value.trim() === "") {
            uerror.textContent = "Username is Required!";
            isvalid = false;
        }
        if (password.value.trim() === "") {
            pwerror.textContent = "password is required!";
            isvalid = false;
        }
        if (isvalid) {
            text.textContent = "Login Successfull!";
            text.style.color = "green";
            form.reset();
            uerror.textContent = "";
            pwerror.textContent = "";
        }
    });
}
document.addEventListener("keydown", function (event) {
    console.log("Key Pressed!", event.key);
});
