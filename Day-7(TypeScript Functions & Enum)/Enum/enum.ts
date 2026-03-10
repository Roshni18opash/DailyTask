enum Status {
    Active,
    Inactive

}
function checkStatus(status:Status):string{
    if(status===Status.Active){
        return "User is Active";
    }else{
        return "User is Inactive";
    }
}
//using string
enum Role {
  Admin = "ADMIN",
  User = "USER"
}

function checkRole(role: Role): string {
  if (role === Role.Admin) {
    return "Access Granted";
  }
  return "Access Limited";
}
// using number
enum Operation {
  Add,
  Subtract
}
function calculate(a: number, b: number, op: Operation): number {
  if (op === Operation.Add) {
    return a + b;
  } else {
    return a - b;
  }
}

console.log(checkStatus(Status.Active));
console.log(checkStatus(Status.Inactive));
console.log(checkRole(Role.Admin));
console.log(checkRole(Role.User));
console.log(calculate(10, 5, Operation.Add));      
console.log(calculate(10, 5, Operation.Subtract)); 

