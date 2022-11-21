let mdp;
let regexmaj = new RegExp("[A-Z]");
let regexmin = new RegExp("[a-z]");
let regexchiffre = new RegExp("[0-9]");
let regexspecial = new RegExp("\\w"); 
let compteur;
let message = document.getElementById('IDmessage');

function verificationmdp(){
    compteur = 0;
    mdp = document.getElementById('IDmdp').value;

    if (regexmaj.test(mdp)){
        compteur = compteur + 1;
    }
    if (regexmin.test(mdp)){
        compteur = compteur + 1;
    }
    if (regexspecial.test(mdp)){
        compteur = compteur + 1;
    }
    if (regexchiffre.test(mdp)) {
        compteur = compteur + 1;
    }
    if (mdp.length < 8){
        compteur = compteur -1;
    }
    switch (compteur){
        case 4:
            message.innerHTML = '<p class="bg-success text-center"> Tres sécurisé</p>';
        break;
        case 3:
            message.innerHTML = '<p class="bg-info text-center">  sécurisé</p>';
        break;
        case 2:
            message.innerHTML = '<p class="bg-warning text-center"> moyen</p>';
        break;
        case 1:
            message.innerHTML = '<p class="bg-danger text-center"> Dangereux</p>';
        break;
        case 0:
            message.innerHTML = '<p class="bg-danger text-center"> Dangereux</p>';
        break;
        default:
            message.innerHTML = '';
    }
}
