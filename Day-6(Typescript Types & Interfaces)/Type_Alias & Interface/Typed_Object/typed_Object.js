//create object of type
var stu1 = {
    id: 1,
    student_name: "Roshni Prajapati",
    emailId: "rj45@gmail.com",
    isStudent: true,
};
var stu2 = {
    id: 2,
    student_name: "Neev Prajapati",
    emailId: "nj7@gmail.com",
    isStudent: true,
};
//function using typed obj
function infoUser(user) {
    var output = document.getElementById("output");
    if (output) {
        var div = document.createElement("div");
        div.innerHTML = "\n        <h3>".concat(user.student_name, "</h3>\n        <p> <b>ID:</b>").concat(user.id, " </p>\n        <p> <b>Student Name:</b>").concat(user.student_name, " </p>\n        <p> <b>EmailId:</b>").concat(user.emailId, " </p>\n        <p> <b>IsStudent:</b>").concat(user.isStudent, " </p>\n        <hr/>\n        ");
        output.appendChild(div);
    }
    // console.log("Students Details");
    // console.log("ID:",user.id);
    // console.log("Student Name:",user.student_name);
    // console.log("EmailId:",user.emailId);
    // console.log("IsActive:",user.isActive);    
}
//calling function
infoUser(stu1);
infoUser(stu2);
