let produit =document.getElementById('IDproduit');
let argent = document.getElementById('IDargent');
var message = document.getElementById('IDjevousrend');
let prix;
let rendu;
let billet10 = 0;
let billet5 = 0;
let piece1 = 0;

function money(){
    produit =document.getElementById('IDproduit').value;
    argent = document.getElementById('IDargent').value;
    if (produit == 1){
        prix = 5;
    }
    else if (produit == 2){
        prix = 10;
    }
    else if (produit == 3){
        prix = 15;
    }
    else if (produit == 4){
        prix = 20;
    }
    rendu = argent - prix;
    while (rendu > 10){
        billet10 = billet10 + 1;
        rendu = rendu - 10;
    }
    while (rendu > 4){
        billet5 = billet5 + 1;
        rendu = rendu - 5;
    }
    while (rendu !=0){
        piece1 = piece1 + 1;
        rendu = rendu - 1;
    } 
    message.innerHTML = "Je vous rend           " + billet10 +"    "+ "<img src='billet10.jpg'>"+"     "+ billet5 +"  "+ "<img src='billetde5.jpg'>" +"     "+ piece1+"  "+ "<img src='piece.jpg'>";
}
