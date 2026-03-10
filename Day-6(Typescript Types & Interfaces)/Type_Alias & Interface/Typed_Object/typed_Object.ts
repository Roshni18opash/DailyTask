
//create type
type Students={
    id:number;
    student_name:string;
    emailId:string;
    isStudent:boolean;
}
//create object of type

const stu1:Students={
    id:1,
    student_name:"Roshni Prajapati",
    emailId:"rj45@gmail.com",
    isStudent:true,
};

const stu2:Students={
    id:2,
    student_name:"Neev Prajapati",
    emailId:"nj7@gmail.com",
    isStudent:true,
}

//function using typed obj

function infoUser(user:Students):void{
    const output=document.getElementById("output");
    if(output){
        const div=document.createElement("div");
        div.innerHTML=`
        <h3>${user.student_name}</h3>
        <p> <b>ID:</b>${user.id} </p>
        <p> <b>Student Name:</b>${user.student_name} </p>
        <p> <b>EmailId:</b>${user.emailId} </p>
        <p> <b>IsStudent:</b>${user.isStudent} </p>
        <hr/>
        `;
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




