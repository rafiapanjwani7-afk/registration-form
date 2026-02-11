var firstName = document.getElementById("f-name");
var lastName = document.getElementById("L-name");
var dateOfBirth = document.getElementById("DOB");
var mobile = document.getElementById("mobile");
var cnic = document.getElementById("cnic");
var email = document.getElementById("email");
var submitBtn = document.getElementById("submit");
var resetBtn = document.getElementById("preview");

function previewForm() {
 
   document.getElementById("fullName").innerHTML ="Student Name: " +firstName.value + " " +lastName.value ;
   document.getElementById("Dob").innerHTML = "Date Of Birth: " + dateOfBirth.value;
   document.getElementById("mobileNumber").innerHTML = "Mobile Number: " + mobile.value;
   document.getElementById("cnicNumber").innerHTML = "CNIC Number: " + cnic.value;
   document.getElementById("emailAddress").innerHTML = "Email Address: " + email.value;
}
function submitForm() {
    document.getElementById("message").innerText =
        "Form submitted successfully!";
        previewForm();
}
