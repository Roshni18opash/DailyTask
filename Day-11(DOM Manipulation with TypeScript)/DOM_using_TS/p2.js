var input = document.getElementById("name");
var output = document.getElementById("output");
if (input && output) {
    input.addEventListener("input", function () {
        output.textContent = input.value;
    });
}
