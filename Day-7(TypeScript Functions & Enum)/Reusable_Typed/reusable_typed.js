function isEven(num) {
    return num % 2 === 0;
}
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function removeDuplicates(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isValidEmail(email) {
    return email.indexOf("@") !== -1;
}
function getToday() {
    return new Date().toDateString();
}
//  add two numbers
function add(a, b) {
    return a + b;
}
// find max number
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(isEven(10));
console.log(capitalize("roshni"));
console.log(removeDuplicates([1, 1, 2, 3]));
console.log(isValidEmail("rj@gmail.com"));
console.log(getToday());
console.log(add(2, 4));
console.log(findMax([2, 5, 6, 7]));
