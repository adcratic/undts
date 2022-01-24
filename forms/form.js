function sendMail(e){
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var subject = document.querySelector('#subject').value;
    var message = document.querySelector('#message').value;

    var tempParams = {
        fromName : name,
        frommail : email,
        fromSubject: subject,
        userMessage: message
    };
    emailjs.send('service_jw29ljq', 'template_j1yceto',tempParams)
    .then( (res) => {
        console.log("success", res.status);
        
    })
    
}