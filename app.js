var firstName = document.getElementById("f-name");
var LastName = document.getElementById("L-name");
var dateOfBirth = document.getElementById("DOB");
var mobile = document.getElementById("mobile");
var cnic = document.getElementById("cnic")
var email = document.getElementById("email")
var email = document.getElementById("submit")
var resetbtn=document.getElementById("reset");

function output(){
 console.log("Student Name:"+firstName.value);
 document.getElementById(result).innerHTML ="Student Name:"+firstName.value
 console.log("father Name:"+LastName.value);
 console.log("date of birth"+ dateOfBirth.value);
 console.log("mobile Number:"+mobile.value);
 console.log("cnic:"+cnic.value);
 console.log("email:"+email.value);
}

function resetbtn(){
    firstName.value === "" 
    LastName.value === " " 
    dateOfBirth.value === " " 
    mobile.value === " " 
    cnic.value === " "
    email.value === " "
}

