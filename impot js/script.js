let agesaisi;
let genresaisi;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

function verifierimposition(){
    agesaisi = document.getElementById('age-saisi').value;
    genresaisi = document.getElementById('genre-saisi').value;
        if (agesaisi > 20 && genresaisi == "H"){
            message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous etes imposables</div>';
        }else if((genresaisi == "F" && agesaisi >= 18) && (genresaisi == "F" && agesaisi <= 35)){
            message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous etes imposables</div>';
        } 
        else {
            message.innerHTML = '<div class="alert alert-danger" role="alert"> Vous  n etes imposables</div>';
             }  
    }
    
    bouton.addEventListener('click', verifierimposition, false)
