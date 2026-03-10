const form = document.getElementById("ageForm") as HTMLFormElement;
const username = document.getElementById("username") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const nameError = document.getElementById("nameError") as HTMLElement;
const ageError = document.getElementById("ageError") as HTMLElement;
const successMsg = document.getElementById("successMsg") as HTMLElement;

username.addEventListener("input", () => {
  if (username.value.trim() === "") {
    nameError.textContent = "Name is required";
  } else {
    nameError.textContent = "";
  }
});
ageInput.addEventListener("input", () => {
  const age = Number(ageInput.value);

  if (age < 18) {
    ageError.textContent = "Age must be 18 or above";
  } else {
    ageError.textContent = "";
  }
});

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  let isValid = true;
  if (username.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }
  const age = Number(ageInput.value);
  if (age < 18 || ageInput.value === "") {
    ageError.textContent = "Valid age (18+) required";
    isValid = false;
  }
  if (isValid) {
    successMsg.textContent = "Form submitted successfully 🎉";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
