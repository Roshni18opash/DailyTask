const heading=document.querySelector(".heading") as HTMLHeadingElement;
const incre=document.querySelector(".inc") as HTMLButtonElement;
const decre=document.querySelector(".dec") as HTMLButtonElement;
 let count=0;

if(heading&&incre&&decre){
   
    incre.addEventListener("click",()=>{
        count++;
        heading.textContent=count.toString();

    })
    decre.addEventListener("click",()=>{
        count--;
        heading.textContent=`$(count)`;
    })
}