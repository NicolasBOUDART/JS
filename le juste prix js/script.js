let objetatrouver = document.getElementById('IDobjet');
let message1 = document.getElementById('IDmessage1');
let prix;
let objetaleatoire;
let tentative1 = document.getElementById('IDtentative1');
let tentative2 = document.getElementById('IDtentative2');
let tentative3 = document.getElementById('IDtentative3');
let tentative4 = document.getElementById('IDtentative4');
let tentative5 = document.getElementById('IDtentative5');
let tentative6 = document.getElementById('IDtentative6');
let tentative7 = document.getElementById('IDtentative7');
let tentative8 = document.getElementById('IDtentative8');
let tentative9 = document.getElementById('IDtentative9');
let tentative10 = document.getElementById('IDtentative10');
let manche1 = document.getElementById('IDresultat1');
let manche2 = document.getElementById('IDresultat2');
let manche3 = document.getElementById('IDresultat3');
let manche4 = document.getElementById('IDresultat4');
let manche5 = document.getElementById('IDresultat5');
let manche6 = document.getElementById('IDresultat6');
let manche7 = document.getElementById('IDresultat7');
let manche8 = document.getElementById('IDresultat8');
let manche9 = document.getElementById('IDresultat9');
let manche10 = document.getElementById('IDresultat1');
let resultatfinal = document.getElementById('IDresultafinal');

function commencerlejeu(){
    objetaleatoire = Math.floor(Math.random() * 5) + 1;
    prix = Math.floor(Math.random() * 100) + 1;
    switch (objetaleatoire){
        case 5 : 
            objetatrouver.innerHTML = '<img src="./objet5.jpg">';
            message1.innerHTML = 'Enceinte JBL';
        break;
        case 4:
            objetatrouver.innerHTML = '<img src="./objet4.jpg">';
            message1.innerHTML = 'Biere pression';
        break;
        case 3:
            objetatrouver.innerHTML = '<img src="./objet3.jpg">';
            message1.innerHTML = 'Chope a biere';
        break;
        case 2:
            objetatrouver.innerHTML = '<img src="./objet2.jpg">';
            message1.innerHTML = 'Casque razer';
        break;
        case 1:
            objetatrouver.innerHTML = '<img src="./objet1.jpg">';
            message1.innerHTML = 'Martinet';
        break;
        default:
            objetatrouver.innerHTML = '';
    } 
    document.getElementById('IDmanche1').style.display="block";
    alert(prix)
}
function essai1(){
    tentative1 = parseInt(document.getElementById('IDtentative1').value);
    if (tentative1 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else if (tentative1 < prix){
        manche1.innerHTML = '<img src="+.png">';
    }     
    else if (tentative1 > prix){
        manche1.innerHTML = '<img src="-.png">';
    }
    document.getElementById('IDmanche2').style.display="block"; 
}
function essai2(){
    tentative2 = parseInt(document.getElementById('IDtentative2').value);
    if (tentative2 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche3').style.display="block";
    }
    if (tentative2 < prix){
        manche2.innerHTML = '<img src="+.png">';
    }
    if (tentative2 > prix){
        manche2.innerHTML = '<img src="-.png">';
    }
}
function essai3(){
    tentative3 = parseInt(document.getElementById('IDtentative3').value);
    if (tentative3 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche4').style.display="block";
    }
    if (tentative3 < prix){
        manche3.innerHTML = '<img src="+.png">';
    }
    if (tentative3 > prix){
        manche3.innerHTML = '<img src="-.png">';
    }
}
function essai4(){
    tentative4 = parseInt(document.getElementById('IDtentative4').value);
    if (tentative4 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche5').style.display="block";
    }
    if (tentative4 < prix){
        manche4.innerHTML = '<img src="+.png">';
    }
    if (tentative4 > prix){
        manche4.innerHTML = '<img src="-.png">';
    }
}
function essai5(){
    tentative5 = parseInt(document.getElementById('IDtentative5').value);
    if (tentative5 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche6').style.display="block";
    }
    if (tentative5 < prix){
        manche5.innerHTML = '<img src="+.png">';
    }
    if (tentative5 > prix){
        manche5.innerHTML = '<img src="-.png">';
    }
}
function essai6(){
    tentative6 = parseInt(document.getElementById('IDtentative6').value);
    if (tentative6 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche7').style.display="block";
    }
    if (tentative6 < prix){
        manche6.innerHTML = '<img src="+.png">';
    }
    if (tentative6 > prix){
        manche6.innerHTML = '<img src="-.png">';
    }
}
function essai7(){
    tentative7 = parseInt(document.getElementById('IDtentative7').value);
    if (tentative7 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche8').style.display="block";
    }
    if (tentative7 < prix){
        manche7.innerHTML = '<img src="+.png">';
    }
    if (tentative7 > prix){
        manche7.innerHTML = '<img src="-.png">';
    }
}
function essai8(){
    tentative8 = parseInt(document.getElementById('IDtentative8').value);
    if (tentative8 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche9').style.display="block";
    }
    if (tentative8 < prix){
        manche8.innerHTML = '<img src="+.png">';
    }
    if (tentative8 > prix){
        manche8.innerHTML = '<img src="-.png">';
    }
}
function essai9(){
    tentative9 = parseInt(document.getElementById('IDtentative9').value);
    if (tentative9 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        document.getElementById('IDmanche10').style.display="block";
    }
    if (tentative9 < prix){
        manche9.innerHTML = '<img src="+.png">';
    }
    if (tentative9 > prix){
        manche9.innerHTML = '<img src="-.png">';
    }
}
function essai10(){
    tentative10 = parseInt(document.getElementById('IDtentative10').value);
    if (tentative10 === prix){
        resultatfinal.innerHTML = '<img src="./win.jpg">';
    }
    else{
        resultatfinal.innerHTML = '<img src="./lose.jpg">';
    }
}