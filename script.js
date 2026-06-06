function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value ,
        message : document.getElementById("message").value
    }
    emailjs.send("service_8znds5j", "template_yc0mbps",parms).
    then(function(response){
        alert("Email have been sent !!");
    }, function(error){
        alert("Failed to send email");
    })
}
