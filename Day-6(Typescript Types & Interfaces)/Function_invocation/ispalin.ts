let ispalin=(palin:string):boolean=>{
let mypalin=palin.split("").reverse().join("")
return mypalin===palin;
}
console.log(ispalin("12321"));
