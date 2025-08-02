let listaDeAmigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo').value;
    
    if (!nomeDoAmigo) {
        alert('Preencha o campo com um nome válido.');
        return;
    }
    if (!isNaN(nomeDoAmigo)) {
        alert('Preencha o campo com um nome válido.');
        return;
    }
    if (listaDeAmigos.includes(nomeDoAmigo)) {
        alert('Preencha com um nome que ainda não foi adicionado.');
        return;
    }
    
    listaDeAmigos.push(nomeDoAmigo);
    limparCampoDeInput();
    mostrarLista();

}

function limparCampoDeInput() {
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Preencha a lista com pelo menos um amigo para sortea-lo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    escreverResultado(indiceAleatorio);
    
}

function mostrarLista() {
    let listaParaMostrar = document.getElementById('listaAmigos');
    
    listaParaMostrar.innerHTML = '';
    
    listaDeAmigos.forEach((nome, indice) => {
    let campoParaMostrar = document.createElement('li');
    let botaoParaRemover = document.createElement('button');

    botaoParaRemover.onclick = () => removerAmigo(indice);
    botaoParaRemover.innerText = 'Remover';

    campoParaMostrar.innerText = nome;
    campoParaMostrar.appendChild(botaoParaRemover);
    listaParaMostrar.appendChild(campoParaMostrar);
    });

}

function escreverResultado(indice) {
    let resultado = listaDeAmigos[indice];
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `${resultado} foi o sorteado(a)`;
}

function limparLista() {
    listaDeAmigos = [];
    mostrarLista();
}


function removerAmigo(indice) {
    listaDeAmigos.splice(indice, 1);
    mostrarLista();
}
