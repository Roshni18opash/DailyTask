
let num=81;
let prime=true;

if(num<=1){
    prime=false;
}else{
    for(let i=2;i<num;i++){
        if(num%i===0){
            prime=false;
            break;
        }
    }
}
if(prime){
    console.log(num + " "+"is a Prime number.");
    
}else{
    console.log(num +" "+ "is not a Prime Number");
    
}

