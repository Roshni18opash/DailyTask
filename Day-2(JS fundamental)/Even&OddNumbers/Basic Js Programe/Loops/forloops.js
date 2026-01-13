let cars =["bmv","suzuki","maruti"];
 let text=" ";
for(let i=0; i<cars.length;i++){
   
    text+=cars[i] +"<br>"; 
}
document.getElementById("cars").innerHTML=text;