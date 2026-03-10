function isValidEmail1(email) {
    return email.includes("@") && email.indexOf(".") !== -1;
}
console.log(isValidEmail1("rj45@gmail.com"));
