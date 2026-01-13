function isDivisible(a) {
    if (a % 2 === 0 && a % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisible(16));
