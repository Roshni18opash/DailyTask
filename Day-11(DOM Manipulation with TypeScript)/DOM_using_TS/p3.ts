const para = document.getElementById("para") as HTMLParagraphElement | null;
const btn = document.getElementById("toggle") as HTMLButtonElement | null;

if (para && btn) {
  btn.addEventListener("click", () => {
    para.style.color =
      para.style.color === "red" ? "blue" : "red";
  });
}
