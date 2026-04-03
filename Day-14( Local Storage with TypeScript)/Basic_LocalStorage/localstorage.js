var input = document.getElementById("inputName");
var button = document.getElementById("btn");
var output = document.getElementById("para");
button.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem("username", input.value);
    output.textContent = "Saved successfully!";
    output.style.color = "green";
    console.log(output);
});
