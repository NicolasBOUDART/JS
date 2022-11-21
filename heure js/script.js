let heure
let minute
let seconde
var message = document.getElementById('ilest');

function afficheheure(){
     heure = parseInt(document.getElementById('heure').value);
     minute = parseInt(document.getElementById('minute').value);
     seconde = parseInt(document.getElementById('seconde').value);       
    seconde ++;
    if (seconde == 60){
        minute++;
        seconde = 0;
        if (minute == 60){
            minute = 0;
            heure++;
            if (heure == 24){
                heure = 0;
            }
        }
    }
    message.innerHTML = "il est" + heure + "h" + minute + "m" + seconde + "s";
}
