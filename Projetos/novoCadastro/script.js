let nomePaciente, idadePaciente, vezesMedico
let qtdeMedicamentoEstoque, qtdeMedicamentoLevado
let seletor = 0
let filaEspera = ['', ]
let nomeDoutor1, nomeDoutor2, nomeDoutor3, nomeDoutor4
let especialidade1, especialidade2, especialidade3, especialidade4


function cadastroPaciente() {
    nomePaciente = prompt("Insira o nome do paciente.")
    idadePaciente = prompt("Insira a idade do paciente.")
    vezesMedico = prompt("Quantas vezes o paciente passou no médico?")

    console.log("O paciente " + nomePaciente + " tem " + idadePaciente + " anos de idade e passou no médico " + vezesMedico + " vezes.")

    adicionaFila()
}

function adicionaFila() {
    if (vezesMedico > 5) {
        fundoEmergencia()

        filaEspera.shift()
        filaEspera.unshift(nomePaciente)
        document.getElementById('txtUrgente').innerHTML = "ESTE É UM CASO URGENTE!"
        document.getElementById('proximoFila').innerHTML = filaEspera[0];
    } else {
        fundoPadrao()
        console.log("Este não é um caso urgente.")
        filaEspera.push(nomePaciente)
    }

    console.log("Próximos na fila: " + filaEspera)
    filaAndou();

}

function checaEstoque() {
    if (qtdeMedicamentoEstoque <= 0) {
        console.log("ERRO - Não há medicamentos em estoque. Favor cadastrar")
        menu()
    } else {
        qtdeMedicamentoLevado = prompt("Quantos medicamentos o paciente vai levar?")
        if (qtdeMedicamentoLevado > qtdeMedicamentoEstoque) {
            console.log("ERRO - Não há estoque o sufienciete. Comunique o gestor.")
            alert("ERRO - Não há estoque o sufienciete. Comunique o gestor.")
        } else {
            qtdeMedicamentoEstoque = qtdeMedicamentoEstoque - qtdeMedicamentoLevado
            console.log("Ainda restam " + qtdeMedicamentoEstoque + " medicamentos em estoque.")
        }
    }

    document.getElementById('qtdeRemedio').innerHTML = qtdeMedicamentoEstoque

}

function addEstoque() {
    qtdeMedicamentoEstoque = prompt("Quantos medicamentos você quer adicionar ao estoque?")
    console.log("Existem " + qtdeMedicamentoEstoque + " medicamentos em estoque.")
    /*alert("Existem " + qtdeMedicamentoEstoque + " medicamentos em estoque.")*/

    document.getElementById('qtdeRemedio').innerHTML = qtdeMedicamentoEstoque
}

function inicializaSala1(){

    nomeDoutor1 = prompt("Bem-vindo profissional da saúde! Qual é o seu nome?")
    especialidade1 = prompt("Qual sua especialidade?")


}

function inicializaSala2(){

    nomeDoutor2 = prompt("Bem-vindo profissional da saúde! Qual é o seu nome?")
    especialidade2 = prompt("Qual sua especialidade?")


}

function inicializaSala3(){

    nomeDoutor3 = prompt("Bem-vindo profissional da saúde! Qual é o seu nome?")
    especialidade3 = prompt("Qual sua especialidade?")


}

function inicializaSala4(){

    nomeDoutor4 = prompt("Bem-vindo profissional da saúde! Qual é o seu nome?")
    especialidade4 = prompt("Qual sua especialidade?")


}

function chamaSala1(){

    fundoPadrao()
    filaEspera.shift()
    document.getElementById('proximoFila').innerHTML = filaEspera[0];
    document.getElementById('proximoConsultorio').innerHTML = '<h1 class="title is-1 centro" id="proximoConsultorio">Sala 1</h1>'
    document.getElementById('txtEspecialidade').innerText = "Dr. " + nomeDoutor1 + " - " + especialidade1
    filaAndou()

}

function chamaSala2(){

    fundoPadrao()
    filaEspera.shift()
    document.getElementById('proximoFila').innerHTML = filaEspera[0];
    document.getElementById('proximoConsultorio').innerHTML = '<h1 class="title is-1 centro" id="proximoConsultorio">Sala 2</h1>'
    document.getElementById('txtEspecialidade').innerText = "Dr. " + nomeDoutor2 + " - " + especialidade2
    filaAndou()

}

function chamaSala3(){

    fundoPadrao()
    filaEspera.shift()
    document.getElementById('proximoFila').innerHTML = filaEspera[0];
    document.getElementById('proximoConsultorio').innerHTML = '<h1 class="title is-1 centro" id="proximoConsultorio">Sala 3</h1>'
    document.getElementById('txtEspecialidade').innerText = "Dr. " + nomeDoutor3 + " - " + especialidade3
    filaAndou()

}

function chamaSala4(){

    fundoPadrao()
    filaEspera.shift()
    document.getElementById('proximoFila').innerHTML = filaEspera[0];
    document.getElementById('proximoConsultorio').innerHTML = '<h1 class="title is-1 centro" id="proximoConsultorio">Sala 4</h1>'
    document.getElementById('txtEspecialidade').innerText = "Dr. " + nomeDoutor4 + " - " + especialidade4
    filaAndou()

}

function removeFila() {
    console.log("O paciente " + filaEspera[0] + " foi removido da fila de espera.")
    filaEspera.shift()
}

function filaAndou(){
    document.getElementById('filaPacientes').innerHTML = filaEspera
}

function fundoEmergencia(){
    document.getElementById('pacienteAtual').style.backgroundColor = "red"
}

function fundoPadrao(){
    document.getElementById('pacienteAtual').style.backgroundColor = "black"
}


/*function menu() {
    seletor = prompt("Selecione a opção desejada: \n 1 - Cadastro de pacientes \n 2 - Controle de estoque \n 3 - Dar remédio ao paciente \n 4 - Retirar o próximo paciente da fila \n 0 - Encerrar o sistema")

    while (seletor != 5) {
        if (seletor == 1) {
            cadastroPaciente()
            menu()
        } else if (seletor == 2) {
            addEstoque()
            menu()
        } else if (seletor == 3) {
            checaEstoque()
        } else if (seletor == 4) {
            removeFila()
            menu()
        } else if (seletor == 0) {
            console.log("Encerrando o sistema.")
            break
        }
    }
}*/

/*function chamaProximo(){
    fundoPadrao()
    document.getElementById('txtUrgente').innerHTML = "ESTE É UM CASO URGENTE!"
    filaEspera.shift()
    document.getElementById('proximoFila').innerHTML = filaEspera[0];
    filaAndou()
}*/