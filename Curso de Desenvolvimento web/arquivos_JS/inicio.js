'use strict'

// função para abrir a janela para adicionar chave que acessara o material
function acesso(abrir){
    let janela = document.getElementById('janela_acesso');
    if(abrir == true){
        janela.style.display = 'flex';
    }
    else if(abrir == false){
        janela.style.display = 'none';
        document.getElementById('chave').value = '';
        document.getElementById('negado').style.top = '0px';
    }
}

// função para validar chave de acesso

function acessando(){
    let negado = document.getElementById('negado');

    let valor = document.getElementById('chave').value;
    if(valor.toLowerCase() == 'ola mundo' && valor.toLowerCase() != ''){
        window.location.href = "https://drive.google.com/drive/folders/189qAJbUdteXoQAuB16xKMVRfbt5Nt2lq?usp=drive_link";

    }
    else if(valor.toLowerCase() == ''){
        negado.style.top = '-26px';
        negado.innerHTML = 'Digite algum valor!';
    }
    else{
        negado.style.top = '-26px';
        negado.innerHTML = 'Acesso negado!';
    }
}