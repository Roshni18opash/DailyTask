const button = document.getElementById("btn") as HTMLButtonElement | null;
const heading=document.getElementById("heading") as HTMLHeadingElement | null;

if (button && heading) {
  button.addEventListener("click", () => {

    heading.textContent = "Good Morning!"
  });
}
