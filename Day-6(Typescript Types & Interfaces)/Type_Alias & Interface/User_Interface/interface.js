// create objects of interface
//@ts-ignore
var a = {
    id: 1,
    student_name: "Roshni Prajapati",
    emailId: "rj45@gmail.com",
    isActive: true,
};
//@ts-ignore
var b = {
    id: 2,
    student_name: "Neev Prajapati",
    emailId: "nj7@gmail.com",
    isActive: true,
};
// function using interface
//@ts-ignore
function infoUser1(user) {
    var output = document.getElementById("output");
    if (output) {
        var div = document.createElement("div");
        div.innerHTML = "\n            <h3>".concat(user.student_name, "</h3>\n            <p><b>ID:</b> ").concat(user.id, "</p>\n            <p><b>Student Name:</b> ").concat(user.student_name, "</p>\n            <p><b>EmailId:</b> ").concat(user.emailId, "</p>\n            <p><b>IsActive:</b> ").concat(user.isActive, "</p>\n            <hr/>\n        ");
        output.appendChild(div);
    }
}
// calling function
infoUser1(a);
infoUser1(b);
