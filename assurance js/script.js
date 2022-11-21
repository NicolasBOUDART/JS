var age;
var permis;
var accident;
var assurance
var message = document.getElementById('IDmessage');

function assur(){
    age = document.getElementById('IDage').value;
    permis = document.getElementById('IDpermis').value;
    accident = document.getElementById('IDaccident').value;
    assurance = document.getElementById('IDassurance').value;
    if (accident >= "3"){
        message.innerHTML = '<p class="bg-dark text-danger">REFUS</p>';
    }
    else if (assurance > 5){
        if (age > 25){
            if (accident >= "1"){
                if (permis <= "2"){
                    message.innerHTML = '<p class="bg-dark text-danger">REFUS</p>';
                }
                else {
                    message.innerHTML ='<p class="bg-warning text-dark">ORANGE</p>';
                }
            }
            else{
                if (permis <= "2"){
                    message.innerHTML = '<p class="bg-warning text-dark">ORANGE</p>';
                }
                else {
                    message.innerHTML ='<p class="bg-success text-light">VERT</p>';
                }
            }
        }
        else if (accident >= "1"){
            if (permis <= "2"){
                message.innerHTML = '<p class="bg-warning text-dark">ORANGE</p>';
            }
            else if(accident >"1"){
                if (accident > "2"){
                    message.innerHTML = '<p class="bg-dark text-danger">REFUS</p>';
                }
                else {
                    message.innerHTML = '<p class="bg-warning text-dark">ORANGE</p>';
                }
            }
            else{
                message.innerHTML = '<p class="bg-success text-light">VERT</p>';
            }
        }
        else if(permis <= "2"){
            message.innerHTML = '<p class="bg-success text-light">VERT</p>';
        }
        else {
            message.innerHTML = '<p class="bg-info text-dark">BLEU</p>';
        }
        }
    else if (age > "25"){
        if (accident >= "1"){
            if (permis <= "2"){
                message.innerHTML = '<p class="bg-dark text-danger">REFUS</p>';
            }
            else {
                message.innerHTML ='<p class="bg-danger text-light">ROUGE</p>';
            }
        }
        else{
            if (permis <= "2"){
                message.innerHTML = '<p class="bg-danger text-light">ROUGE</p>';
            }
            else {
                message.innerHTML ='<p class="bg-warning text-dark">ORANGE</p>';
            }
        }
    }
    else if (accident >= "1"){
        if (permis <= "2"){
            message.innerHTML = '<p class="bg-danger text-light">ROUGE</p>';
        }
        else if(accident > "1"){
            if (accident > "2"){
                message.innerHTML = '<p class="bg-dark text-danger">REFUS</p>';
            }
            else {
                message.innerHTML = '<p class="bg-danger text-light">ROUGE</p>';
            }
        }
        else{
            message.innerHTML = '<p class="bg-warning text-dark">ORANGE</p>';
        }
    }
    else if(permis <= "2"){
        message.innerHTML = '<p class="bg-warning text-dark">ORANGE</p>';
    }
    else {
        message.innerHTML = '<p class="bg-success text-light">VERT</p>';
    }
}
