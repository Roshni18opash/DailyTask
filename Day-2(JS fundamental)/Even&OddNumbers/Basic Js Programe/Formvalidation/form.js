
function validationForm(){
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var emailPattern= /^(?=.*[0-9])(?=.*@).+$/;


    if(!emailPattern.test(email)){
        alert("Email must contain at least one number and @ symbol")
        return false;
   
}   
var capital = /[A-Z]/;
var number = /[0-9]/;
var symbol = /[!@#$%^&*]/;
if(!capital.test(password)){
    alert("invalid password")
    return false;
}
if(!number.test(password)){
    alert("invalid password");
    return false;
}
if(!symbol.test(password)){
    alert("invalid password")
    return false;
}
if(password.lengh<6){
    alert("password must be contain more than 6 letter")
    return false;
}
alert ("form submitted successfully!")
return true;
}