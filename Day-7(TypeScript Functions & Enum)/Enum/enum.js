var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
})(Status || (Status = {}));
function checkStatus(status) {
    if (status === Status.Active) {
        return "User is Active";
    }
    else {
        return "User is Inactive";
    }
}
//using string
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
function checkRole(role) {
    if (role === Role.Admin) {
        return "Access Granted";
    }
    return "Access Limited";
}
// using number
var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Subtract"] = 1] = "Subtract";
})(Operation || (Operation = {}));
function calculate(a, b, op) {
    if (op === Operation.Add) {
        return a + b;
    }
    else {
        return a - b;
    }
}
console.log(checkStatus(Status.Active));
console.log(checkStatus(Status.Inactive));
console.log(checkRole(Role.Admin));
console.log(checkRole(Role.User));
console.log(calculate(10, 5, Operation.Add)); // 15
console.log(calculate(10, 5, Operation.Subtract)); // 5
