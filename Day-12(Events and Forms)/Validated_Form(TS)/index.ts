const form=document.getElementById("loginForm") as HTMLFormElement | null;
const uname=document.getElementById("username") as HTMLInputElement | null;
const password=document.getElementById("password") as HTMLInputElement | null;
const btn=document.getElementById("btn") as HTMLButtonElement | null;
const uerror = document.getElementById("uname-error") as HTMLSpanElement | null
const pwerror=document.getElementById("pwerror")as HTMLSpanElement | null;
const text =document.getElementById("success_msg") as HTMLParagraphElement | null;

//Username validation

if(form&&uname&&password&&uerror&&pwerror&&text&&btn){
    uname.addEventListener("input",(event)=>{
        const value=(event.target as HTMLInputElement).value;

        if(value.length<3){
            uerror.textContent="Minimum  three Characters required!";
        }else{
            uerror.textContent="";
        }

    });

//password validation

password.addEventListener("input",(event: Event)=>{
    const value=(event.target as HTMLInputElement).value;
    const strong_pw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    if (!strong_pw.test(value)){
        pwerror.textContent= "Password must be at least 6 characters with uppercase, number & symbol";

    }else{ 
        pwerror.textContent="";
    }
})
//focus blur event
uname.addEventListener("focus",()=>{
    uerror.textContent="Enter UserName";
});
uname.addEventListener("blur",()=>{
    uerror.textContent="";
});

btn.addEventListener("click",()=>{
  console.log("Loging button clicked!");
  
})
form.addEventListener("submit",(event:SubmitEvent)=>{
    event.preventDefault();
    let isvalid=true;
    if(uname.value.trim()===""){
        uerror.textContent="Username is Required!";
        isvalid=false;
    }
    if(password.value.trim()===""){
        pwerror.textContent="password is required!"
        isvalid=false;
    }
   if(isvalid){
    text.textContent="Login Successfull!"
    text.style.color="green"
    form.reset();
     uerror.textContent = "";
      pwerror.textContent = "";
    
   }

});
}
document.addEventListener("keydown",(event:KeyboardEvent)=>{
    
        console.log("Key Pressed!",event.key);
        

});