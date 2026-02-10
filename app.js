var firstName = document.getElementById("f-name").value;
var LastName = document.getElementById("L-name").value;
var dateOfBirth = document.getElementById("DOB").value;
var mobile = document.getElementById("mobile").value;
var cnic = document.getElementById("cnic");
var email = document.getElementById("email").value;
var submitBtn = document.getElementById("submit");
var resetBtn = document.getElementById("reset");

function userOutput() {
   document.getElementById("fullName").innerHTML = firstName+ " " + LastName;
   document.getElementById("Dob").innerHTML = dateOfBirth;
   document.getElementById("mobileNumber").innerHTML = mobile;
   document.getElementById("cnicNumber").innerHTML = cnic;
   document.getElementById("emailAddress").innerHTML = email;
   
}
function resetForm() {
   firstName.value = ""
   LastName.value = ""
   dateOfBirth.value = ""
   mobile.value = ""
   cnic.value = ""
   email.value = ""
   
}
function submitForm() {
   userOutput();
   resetForm();
}
