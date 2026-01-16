var para = document.getElementById("para");
var btn = document.getElementById("toggle");
if (para && btn) {
    btn.addEventListener("click", function () {
        para.style.color =
            para.style.color === "red" ? "blue" : "red";
    });
}
