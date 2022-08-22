votoCoca = document.getElementById("votosCoca");
votoPepsi = document.getElementById("votosPepsi");
votosTotais = document.getElementById("votosTotais");

var coca = 0;
var pepsi = 0;
var total = 0;

function prefiroCoca(){
    total++;
    coca++;

    votosTotais.innerText = "Votos totais: " + total;
    votoCoca.innerText = "Votos: " + coca;
}

function prefiroPepsi(){
    total++;
    pepsi++;
    
    votosTotais.innerText = "Votos totais: " + total;
    votoPepsi.innerText = "Votos: " + pepsi;
}

function geraRelatorio(){

    alert( coca + " pessoas preferem coca-cola." + "\n" 
    + pepsi + " pessoas preferem pepsi.")

}