var mail;
var mailverificationpoint;
var mailcoupe;
var message = document.getElementById('IDmessage');

function verifemail (){
    mail = document.getElementById('IDmail').value;
    message.innerHTML = '<p class= bg-danger text-white> adresse mail non valide </p>';
    if (mail.includes('@') && mail.includes('.') ){
        mailcoupe = mail.indexOf('@');
        mailverificationpoint = mail.substring(mailcoupe);
        if (mailverificationpoint.includes('.')){
        message.innerHTML = '<p class= bg-primary text-white> adresse mail valide </p>';
        }
    else{
        message.innerHTML = '<p class= bg-danger text-white> adresse mail non valide </p>'
    }
}
}