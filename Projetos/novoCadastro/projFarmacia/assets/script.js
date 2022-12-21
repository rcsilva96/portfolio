var medicamentos = [];

function cadastraMedicamento() {

    event.preventDefault();

    let medicamento = {
        "nomeMedicamento": document.getElementById("nomeMedicamento").value,
        "qtdeMedicamento": document.getElementById("qtdeMedicamento").value,
        "classeMedicamento": document.getElementById("classeMedicamento").value,
    }

    document.getElementById("nomeMedicamento").value = "";
    document.getElementById("qtdeMedicamento").value = "";
    document.getElementById("classeMedicamento").value = "";

    medicamentos.push(medicamento);

    renderTable()
    console.log('Medicamento adicionado!')


}

function renderTable() {

    let table = document.getElementById("dataTable");
    table.innerHTML = `<th> ID </th>
    <th> Medicamento </th>
    <th> Quantidade </th>
    <th> Classe do medicamento </th>
    <th> Remover </th>`

    for (let i = 0; i < medicamentos.length; i++) {
        table.innerHTML = table.innerHTML + `<th> ${i} </th>
        <th> ${medicamentos[i].nomeMedicamento} </th>
        <th> ${medicamentos[i].qtdeMedicamento} </th>
        <th> ${medicamentos[i].classeMedicamento} </th>
        <th> <button onclick="removeMedicamento(${i})"><img src="./assets/img/del.png" width="16"></img></button> </th>`
    }

}

function removeMedicamento(index) {
    medicamentos.splice(index, 1);
    renderTable();
}

