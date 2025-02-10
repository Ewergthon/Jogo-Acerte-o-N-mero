let numeroSecreto = gerarNumeroAleaorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','...Adivinhe o número secreto...');
exibirTextoNaTela('p','Escolha um número entre 1 e 100')

function verificarChute(){
    let tentativa = document.querySelector('input').value;
    
    if (tentativa == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!! Parabéns');
        exibirTextoNaTela('p', 'Você descobriu o número secreto.');
    } else {
        if (tentativa > numeroSecreto){
            exibirTextoNaTela('p', 'Número secreto é menor que o chute.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que o chute.')
        }
    }
}

function gerarNumeroAleaorio(){
    return parseInt(Math.random() *100 + 1);
}