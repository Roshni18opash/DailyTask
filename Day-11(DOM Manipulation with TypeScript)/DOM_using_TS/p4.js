var text = document.getElementById("text");
var button = document.getElementById("btn");
if (text && button) {
    button.addEventListener("click", function () {
        text.style.display =
            text.style.display === "none" ? "block" : "none";
    });
}
