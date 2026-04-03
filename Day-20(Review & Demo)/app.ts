// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {

  // Strictly type DOM elements
  const usernameInput = document.getElementById("username") as HTMLInputElement | null;
  const ageInput = document.getElementById("age") as HTMLInputElement | null;
  const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement | null;
  const errorMsg = document.getElementById("error") as HTMLParagraphElement | null;

  // Stop execution if any element is missing
  if (!usernameInput || !ageInput || !saveBtn || !errorMsg) {
    console.error("Required DOM elements not found!");
    return;
  }

  // User interface
  interface User {
    username: string;
    age: number;
  }

  // Validation function
  function validateUser(user: User): string | null {
    if (user.username.trim().length < 3) return "Username must be at least 3 characters";
    if (user.age < 18 || user.age > 60) return "Age must be between 18 and 60";
    return null;
  }

  // Load saved user from localStorage
  const savedProfile = localStorage.getItem("userProfile");
  if (savedProfile) {
    const user: User = JSON.parse(savedProfile);
    usernameInput.value = user.username;
    ageInput.value = String(user.age);
  }

  // Save profile handler
  function saveProfile(): void {
    // Clear previous error
    errorMsg.textContent = "";
    usernameInput.classList.remove("error");
    ageInput.classList.remove("error");

    const user: User = {
      username: usernameInput.value,
      age: Number(ageInput.value),
    };

    const error = validateUser(user);

    if (error) {
      errorMsg.textContent = error;

      if (user.username.trim().length < 3) usernameInput.classList.add("error");
      if (user.age < 18 || user.age > 60) ageInput.classList.add("error");

      return;
    }

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(user));

    alert(`Profile saved successfully!\nUsername: ${user.username}\nAge: ${user.age}`);
  }

  // Attach event listener
  saveBtn.addEventListener("click", saveProfile);

});
