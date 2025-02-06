let numeroSecreto = gerarNumeroAleaorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','...Adivinhe o número secreto...');
exibirTextoNaTela('p','Escolha um número entre 1 e 100')

function verificarChute(){
    let tentativa = document.querySelector('input').value;
    console.log(tentativa == numeroSecreto);
}

function gerarNumeroAleaorio(){
    return parseInt(Math.random() *100 + 1);
}