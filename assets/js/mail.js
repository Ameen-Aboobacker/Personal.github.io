function sendmail(){
    var params = {
        name:document.getElementById("name").Value,
        email:document.getElementById("email").Value,
        message:document.getElementById("message").Value,
    };
var sentLoader=document.getElementById('sentLoader').classList;
sentLoader.remove("d-none");
const serviceID="service_person"
const templateID="template_ewz792r"
emailjs.send(serviceID,templateID,params)
.then((res)=>{
     sentLoader.add("d-none");
     console.log(res);
     alert("your message sent successfully");
})
.catch((err)=>console.log(err));
}