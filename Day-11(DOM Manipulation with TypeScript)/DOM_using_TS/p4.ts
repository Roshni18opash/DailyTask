const text=document.getElementById("text") as HTMLParagraphElement | null;
const button=document.getElementById("btn") as HTMLButtonElement | null;

if(text && button){
    button.addEventListener("click",()=>{
        text.style.display=
        text.style.display==="none"?"block":"none";
    })
}