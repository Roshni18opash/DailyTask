const input = document.getElementById("name") as HTMLInputElement | null;
const output = document.getElementById("output") as HTMLParagraphElement | null;

if (input && output) {
  input.addEventListener("input", () => {
    output.textContent = input.value;
  });
}
