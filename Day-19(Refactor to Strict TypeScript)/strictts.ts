// DOM elements with strict typing
const usernameInput = document.getElementById("username")! as HTMLInputElement;
const ageInput = document.getElementById("age")! as HTMLInputElement;
const saveBtn = document.getElementById("saveBtn")! as HTMLButtonElement;
const errorText = document.getElementById("error")! as HTMLParagraphElement;

// Show error
function showError(message: string): void {
  errorText.textContent = message;
}

// Clear error
function clearError(): void {
  errorText.textContent = "";
}

// Validate and save data
function saveUser(): void {
  try {
    const username: string = usernameInput.value.trim();
    const age: number = Number(ageInput.value);

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

  } catch (error) {
    showError("Unexpected error occurred");
    console.error(error);
  }
}

// Event binding
saveBtn.addEventListener("click", saveUser);
