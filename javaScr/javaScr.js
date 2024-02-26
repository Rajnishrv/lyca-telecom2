//send data to mail
function sentEmail() {
    Email.send({
        SecureToken: "e426ef0b-94f8-44f7-8010-8010184eef51",
        To: 'rajnishkumar550443@gmail.com',
        From: "rajnishkumar550443@gmail.com",
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value
             +"<br> Email: " + document.getElementById("email").value
             +"<br> Phone: " + document.getElementById("phone").value
             +"<br> Message: " + document.getElementById("message").value
    }).then(
         message => swal("Success", "We will contact you soon.")
    );
};

// form validition
function valid(){
var nameRE = /^[A-Za-z]+(\s)+[A-Za-z]+$/;
var emailRE = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
var mobRE = /^(\d){10,11}$/;
var messageRE = /^(\w)+$/;

var Name=document.getElementById("name").value;
if(Name==""){
    alert("Name cannot be blank");
    return false;
}
if(!nameRE.test(Name)){
    alert("Name has to be a combination of fname and lname");
    return false;
}

var Email=document.getElementById("email").value;
if(Email==""){
    alert("Email cannot be blank");
    return false;
}
if(!emailRE.test(Email)){
    alert("Email should have proper validation");
    return false;
}

var Phone =document.getElementById("phone").value;
if(Phone==""){
    alert("Phone no. cannot be blank");
    return false;
}
if(!mobRE.test(Phone)){
    alert("Please enter 10 digit phone no");
    return false;
}

var Message=document.getElementById("message").value;
if(Message==""){
    alert("Message cannot be blank");
    return false;
}
if(!messageRE.test(Message)){
    alert("Dont enter sp. char in  message");
    return false;
}
}