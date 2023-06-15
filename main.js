const form = document.getElementById ("form-atividade");
const imgAprovado = '<img src="./images/images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/images/reprovado.png" alt="emoji triste" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado"> aprovado </span>'
const spanReprovado = '<span class="resultado reprovado"> reprovado </span>'
const notaminima = parseFloat(prompt("digite a nota minima:"))

let linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionalinha()
    atualizatabela()
    atualizamediafinal()
})

function adicionalinha () {
    const inputnomeatividade = document.getElementById("nome-atividade");
    const inputnotaatividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputnomeatividade.value)) {
        alert (`A atividade: ${inputnomeatividade.value} ja foi inserida`)
    } else {

    atividades.push (inputnomeatividade.value)
    notas.push(parseFloat(inputnotaatividade.value));

    let linha = "<tr>"
    linha += `<td>${inputnomeatividade.value}</td>`
    linha += `<td>${inputnotaatividade.value}</td>`
    linha += `<td>${inputnotaatividade.value >= notaminima ? imgAprovado : imgReprovado}</td>`;
    linha += "</tr>";

    linhas += linha
}

    inputnomeatividade.value = ""
    inputnotaatividade.value = ""
}

function atualizatabela() {
    const corpotabela = document.querySelector("tbody")
    corpotabela.innerHTML = linhas
}

function atualizamediafinal() {
    const mediafinal = calculamediafinal()

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima ? spanAprovado : spanReprovado;
}
    
    function calculamediafinal() {
        let somadasnotas = 0;
    
        for (let i = 0; i < notas.length; i++) {
            somadasnotas += notas[i];
        }
    
        return somadasnotas / notas.length
}
