const loginForm=document.getElementById("loginForm") as HTMLFormElement | null;
const username=document.getElementById("username") as HTMLInputElement | null;
const password=document.getElementById("password") as HTMLInputElement | null;
const userError=document.getElementById("uname-error") as HTMLElement | null;
const passwordError=document.getElementById("pwerror") as HTMLElement| null;
const successmsg=document.getElementById("msg") as HTMLElement| null;

loginForm?.addEventListener("submit",(event:Event):void=>{
    event.preventDefault();
    //clear previous msg
    if (userError) userError.textContent = "";
    if(passwordError) passwordError.textContent="";
    if(successmsg)successmsg.textContent="";

   let isvalid:boolean=true;

    //uname validation
    if(!username || username.value.trim()===""){
       userError && ( userError.textContent="Username is Required!")
        isvalid=false;
    }
    if(!password || password.value.trim().length<6){
       passwordError && (passwordError.textContent="Password must be atleast 6 characters!")
        isvalid=false;
    }
    if(isvalid){
       successmsg && (successmsg.textContent="Login Successfull!");
        loginForm?.reset();
    }
});