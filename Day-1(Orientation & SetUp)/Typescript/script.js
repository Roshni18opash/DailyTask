const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

/* Submit validation */
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

/* Real-time validation */
nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);

/* MAIN VALIDATION */
function validateForm() {
  validateName();
  validateEmail();
  validatePassword();
}

/* NAME */
function validateName() {
  if (nameInput.value.trim() === "") {
    setError(nameInput, "Name is required");
  } else {
    setSuccess(nameInput);
  }
}

/* EMAIL (FIXED ISSUE) */
function validateEmail() {
  const email = emailInput.value.trim();

  if (email === "") {
    setError(emailInput, "Email is required");
  } else if (!isValidEmail(email)) {
    setError(emailInput, "Enter a valid email");
  } else {
    setSuccess(emailInput);
  }
}

/* PASSWORD */
function validatePassword() {
  if (passwordInput.value.trim() === "") {
    setError(passwordInput, "Password is required");
  } else if (passwordInput.value.length < 6) {
    setError(passwordInput, "Minimum 6 characters");
  } else {
    setSuccess(passwordInput);
  }
}

/* ERROR */
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

/* SUCCESS */
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

/* EMAIL REGEX */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
