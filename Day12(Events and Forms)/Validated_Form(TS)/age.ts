// 1️⃣ Get form element
const form = document.getElementById("ageForm") as HTMLFormElement;

// 2️⃣ Get input elements
const username = document.getElementById("username") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;

// 3️⃣ Get error & message elements
const nameError = document.getElementById("nameError") as HTMLElement;
const ageError = document.getElementById("ageError") as HTMLElement;
const successMsg = document.getElementById("successMsg") as HTMLElement;

// 4️⃣ LIVE Name validation
username.addEventListener("input", () => {
  if (username.value.trim() === "") {
    nameError.textContent = "Name is required";
  } else {
    nameError.textContent = "";
  }
});

// 5️⃣ LIVE Age validation
ageInput.addEventListener("input", () => {
  const age = Number(ageInput.value);

  if (age < 18) {
    ageError.textContent = "Age must be 18 or above";
  } else {
    ageError.textContent = "";
  }
});

// 6️⃣ Form submit validation
form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // stop reload

  let isValid = true;

  // Name check
  if (username.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Age check
  const age = Number(ageInput.value);
  if (age < 18 || ageInput.value === "") {
    ageError.textContent = "Valid age (18+) required";
    isValid = false;
  }

  // 7️⃣ Success message
  if (isValid) {
    successMsg.textContent = "Form submitted successfully 🎉";
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
