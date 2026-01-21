const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
const errorText = document.getElementById("error") as HTMLParagraphElement;

function showError(message: string): void {
  errorText.textContent = message;
  nameInput.classList.add("error");
  ageInput.classList.add("error");
  emailInput.classList.add("error");
}

function clearError(): void {
  errorText.textContent = "";
  nameInput.classList.remove("error");
  ageInput.classList.remove("error");
  emailInput.classList.remove("error");
}

function validateProfile(): void {
  try {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();

    if (!name || !age || !email) {
      showError("All fields are required");
      return;
    }

    if (name.length < 3) {
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

  } catch (error) {
    showError("Unexpected error occurred");
    console.error(error);
  }
}

saveBtn.addEventListener("click", validateProfile);
