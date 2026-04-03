const loginForm=document.getElementById("loginForm") as HTMLFormElement | null;
const username=document.getElementById("username") as HTMLInputElement | null;
const password=document.getElementById("password") as HTMLInputElement | null;
const email=document.getElementById("email") as HTMLInputElement | null;
const message=document.getElementById("msg") as HTMLElement | null;
const uname_error=document.getElementById("uname_error") as HTMLElement | null;
const email_error=document.getElementById("email_error") as HTMLElement | null;
const pw_error=document.getElementById("pw_error") as HTMLElement | null;

loginForm?.addEventListener("submit",(event:Event):void=>{
    event.preventDefault();
    //clear previous msg
    if (uname_error) uname_error.textContent = "";
    if(pw_error) pw_error.textContent="";
    if(email_error) email_error.textContent="";
    if(message)message.textContent="";

   let isvalid:boolean=true;

    //uname validation
    if(!username || username.value.trim()===""){
       uname_error && ( uname_error.textContent="Username is Required!")
        isvalid=false;
    }
    //email validation
    if(!email || email.value.trim()===""){
       email_error && ( email_error.textContent="Email is Required!")
        isvalid=false;
    }

    //password validation
    if(!password || password.value.trim().length<6){
       pw_error && (pw_error.textContent="Password must be atleast 6 characters!")
        isvalid=false;
    }
    if(isvalid){
       message && (message.textContent="Login Successfull!");
        loginForm?.reset();
 window.location.href = "home.html";
    }
   
});