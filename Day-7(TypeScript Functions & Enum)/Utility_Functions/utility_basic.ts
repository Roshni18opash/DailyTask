function isValidEmail10(email: string): boolean {
  return email.includes("@") && email.indexOf(".") !== -1;
}
console.log(isValidEmail10("rj45@gmail.com"));

