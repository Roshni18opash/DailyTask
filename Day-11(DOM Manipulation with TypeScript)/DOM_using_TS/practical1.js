var button = document.getElementById("btn");
var heading = document.getElementById("heading");
if (button && heading) {
    button.addEventListener("click", function () {
        heading.textContent = "Good Morning!";
    });
}
