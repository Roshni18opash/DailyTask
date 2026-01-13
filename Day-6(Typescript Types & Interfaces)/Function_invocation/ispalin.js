var ispalin = function (palin) {
    var mypalin = palin.split("").reverse().join("");
    return mypalin === palin;
};
console.log(ispalin("12321"));
