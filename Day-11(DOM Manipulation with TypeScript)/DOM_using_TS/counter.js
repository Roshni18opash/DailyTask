var heading = document.querySelector(".heading");
var incre = document.querySelector(".inc");
var decre = document.querySelector(".dec");
var count = 0;
if (heading && incre && decre) {
    incre.addEventListener("click", function () {
        count++;
        heading.textContent = count.toString();
    });
    decre.addEventListener("click", function () {
        count--;
        heading.textContent = count.toString();
    });
}
