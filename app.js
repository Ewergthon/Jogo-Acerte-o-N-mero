let listaNumeroSorteado = [];
let rodadas = 100;
let numeroSecreto = gerarNumeroAleaorio();
let numeroTentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial (){
 
    exibirTextoNaTela('h1','...Adivinhe o número secreto...');
    exibirTextoNaTela('p','Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute(){
    let tentativa = document.querySelector('input').value;
    
    if (tentativa == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!! Parabéns');
        let palavraTentativa = numeroTentativa > 1 ? ' tentativas.' : ' tentativa.';
        let mensagemTentativas = `Você descobiu o número secreto com ${numeroTentativa}${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (tentativa > numeroSecreto){
            exibirTextoNaTela('p', 'Número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }

        numeroTentativa++;
        limparCampo();
    }
}

function gerarNumeroAleaorio(){
    let numeroEscolhido = parseInt(Math.random() *100 + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == rodadas){
        listaNumeroSorteado = [];
    }

    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleaorio();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){

    tentativa = document.querySelector('input');
    tentativa.value = '';
}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleaorio();
    limparCampo();
    numeroTentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}