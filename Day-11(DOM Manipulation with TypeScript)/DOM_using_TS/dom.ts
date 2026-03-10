// // Type-safe DOM selection
// const title = document.getElementById("title") as HTMLElement | null;
// const input = document.getElementById("textInput") as HTMLInputElement | null;
// const button = document.getElementById("changeBtn") as HTMLButtonElement | null;
// const message = document.getElementById("message") as HTMLElement | null;


// if (title && input && button && message) {
//   button.addEventListener("click", () => {
//     const newText: string = input.value;

//     if (newText === "") {
//       message.innerText = "Please enter some text!";
//       message.style.color = "red";
//       return;
//     }

 
//     title.innerText = newText;

//     message.innerText = "Text updated successfully!";
//     message.style.color = "green";

//     input.value = "";
//   });
// }
const title=document.getElementById("title") as HTMLElement | null;
const input =document.getElementById("textInput") as HTMLInputElement | null;
const button=document.getElementById("changeBtn") as HTMLButtonElement | null;
const message=document.getElementById("message") as HTMLElement | null;


if(title && input && button && message){
    button.addEventListener("click",()=>{
          const text : string=input.value;
          if(text===""){
            message.innerText="Please Enter some text!";
            message.style.color="red";
            return;
          }
          title.innerText=text;
          message.innerText="Title Updated Successfully!"
          message.style.color="green";

   

    })
  
}