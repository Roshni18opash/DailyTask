// create interface
interface Student {
    id: number;
    student_name: string;
    emailId: string;
    isActive: boolean;
}

// create objects of interface
//@ts-ignore
const a: Student = {
    id: 1,
    student_name: "Roshni Prajapati",
    emailId: "rj45@gmail.com",
    isActive: true,
};
//@ts-ignore
const b: Student = {
    id: 2,
    student_name: "Neev Prajapati",
    emailId: "nj7@gmail.com",
    isActive: true,
};

// function using interface
//@ts-ignore
function infoUser1(user: Student): void {
    const output = document.getElementById("output");

    if (output) {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${user.student_name}</h3>
            <p><b>ID:</b> ${user.id}</p>
            <p><b>Student Name:</b> ${user.student_name}</p>
            <p><b>EmailId:</b> ${user.emailId}</p>
            <p><b>IsActive:</b> ${user.isActive}</p>
            <hr/>
        `;
        output.appendChild(div);
    }
}

// calling function
infoUser1(a);
infoUser1(b);
