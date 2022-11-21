var prix1 = 0.1;
var prix2 = 0.09;
var prix3 = 0.08;
let nombredecopie = document.getElementById('copie')
let prix
var message = document.getElementById('leprixest')

function prixtotal(){
    nombredecopie = document.getElementById('copie').value
    if (nombredecopie < 11){
        prix = nombredecopie * prix1;
        message.innerHTML = "le prix est de  " + prix + "euros";
    }
    else if (nombredecopie < 31){
        prix = (nombredecopie - 10) * prix2 + 1 ;
        message.innerHTML = "le prix est de  " + prix + "euros";
    }
    else{
        prix = (nombredecopie - 30) * prix3 + 2.8;
        message.innerHTML = "le prix est de  " + prix + "euros";
    }
}
