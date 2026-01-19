"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById("loginForm");
const uname = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const uerror = document.getElementById("uname-error");
const pwerror = document.getElementById("pwerror");
const text = document.getElementById("success_msg");
//Username validation
if (form && uname && password && uerror && pwerror && text && btn) {
    uname.addEventListener("input", (event) => {
        const value = event.target.value;
        if (value.length < 3) {
            uerror.textContent = "Minimum  three Characters required!";
        }
        else {
            uerror.textContent = "";
        }
    });
    //password validation
    password.addEventListener("input", (event) => {
        const value = event.target.value;
        const strong_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
        if (!strong_pw.test(value)) {
            pwerror.textContent = "Password must be at least 6 characters with uppercase, number & symbol";
        }
        else {
            pwerror.textContent = "";
        }
    });
    //focus blur event
    uname.addEventListener("focus", () => {
        uerror.textContent = "Enter UserName";
    });
    uname.addEventListener("blur", () => {
        uerror.textContent = "";
    });
    btn.addEventListener("click", () => {
        console.log("Loging button clicked!");
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isvalid = true;
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
document.addEventListener("keydown", (event) => {
    console.log("Key Pressed!", event.key);
});
//# sourceMappingURL=index.js.map