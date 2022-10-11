function jogaPedra(){
    
    var CPU = Math.floor(Math.random() * 3);
    var jogador

    var imgTesoura = "./img/tesoura.png"
    var ImgPedra = "./img/pedra.png"
    var imgPapel = "./img/papel.png"

    document.getElementById("optJogador").src=ImgPedra;

    jogador = 1;

    if (jogador == CPU) { 
        document.getElementById("optCPU").src=ImgPedra;
        console.log('A CPU escolheu pedra. Empate.')
    } if (jogador < CPU) { 
        document.getElementById("optCPU").src=imgTesoura;
        console.log('A CPU escolheu tesoura. Você ganhou.')
    } if (jogador > CPU) { 
        document.getElementById("optCPU").src=imgPapel;
        console.log('A CPU escolheu papel. Você perdeu.')
    } 
}

function jogaPapel(){
    
    var CPU = Math.floor(Math.random() * 3);
    var jogador

    var imgTesoura = "./img/tesoura.png"
    var ImgPedra = "./img/pedra.png"
    var imgPapel = "./img/papel.png"

    document.getElementById("optJogador").src=imgPapel;

    jogador = 1;

    if (jogador == CPU) { 
        document.getElementById("optCPU").src=imgPapel;
        console.log('A CPU escolheu papel. Empate.')
    } if (jogador < CPU) { 
        document.getElementById("optCPU").src=ImgPedra;
        console.log('A CPU escolheu pedra. Você ganhou.')
    } if (jogador > CPU) { 
        document.getElementById("optCPU").src=imgTesoura;
        console.log('A CPU escolheu tesoura. Você perdeu.')
    } 
}

function jogaTesoura(){
    
    var CPU = Math.floor(Math.random() * 3);
    var jogador

    var imgTesoura = "./img/tesoura.png"
    var ImgPedra = "./img/pedra.png"
    var imgPapel = "./img/papel.png"

    document.getElementById("optJogador").src=imgTesoura;

    jogador = 1;

    if (jogador == CPU) { 
        document.getElementById("optCPU").src=imgTesoura;
        console.log('A CPU escolheu tesoura. Empate.')
    } if (jogador < CPU) { 
        document.getElementById("optCPU").src=imgPapel;
        console.log('A CPU escolheu papel. Você ganhou.')
    } if (jogador > CPU) { 
        document.getElementById("optCPU").src=ImgPedra;
        console.log('A CPU escolheu pedra. Você perdeu.');
    } 
}