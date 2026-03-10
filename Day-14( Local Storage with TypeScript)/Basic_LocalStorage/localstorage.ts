const input=document.getElementById("inputName") as HTMLInputElement;
const button=document.getElementById("btn") as HTMLButtonElement;
const output=document.getElementById("para") as HTMLParagraphElement;

button.addEventListener('click',(e)=>{
e.preventDefault();
    localStorage.setItem("username",input.value);
    output.textContent = "Saved successfully!";
    output.style.color = "green";
    console.log(output);
    
}) 

//Storing obj in LS
// const user = {
//   name: "Roshni",
//   age: 22,
// };

// localStorage.setItem("user", JSON.stringify(user));
//Get obj data in LS 
// const userData = localStorage.getItem("user");

// if (userData) {
//   const parsedUser = JSON.parse(userData);
//   console.log(parsedUser.name);
// }
//Typed safe obj with interface
// interface User {
//   name: string;
//   age: number;
// }

// const userData = localStorage.getItem("user");

// if (userData) {
//   const user: User = JSON.parse(userData);
//   console.log(user.age);
// }


