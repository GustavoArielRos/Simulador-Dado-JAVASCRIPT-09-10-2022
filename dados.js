
// função "principal":

function roda_dado(){

    let tipo_de_dado = document.getElementById('nome_dado').value;

    const lista_dados = ['d4','d6','d8','d20','d12','d10'];

    if(tipo_de_dado == lista_dados[0])
    {
        let resultado = dado_quatro();
        document.getElementById('resultado').innerText = "\n resultado:" + resultado;
    }

    else if(tipo_de_dado == lista_dados[1])
    {
        let resultado = dado_seis();
        document.getElementById('resultado').innerText = "\n resultado:" + resultado;
    }

    else if(tipo_de_dado == lista_dados[2])
    {
        let resultado = dado_oito();
        document.getElementById('resultado').innerText = "\n resultado:" + resultado;
    }

    else if(tipo_de_dado == lista_dados[3])
    {
        let resultado = dado_vinte();
        document.getElementById('resultado').innerText = "\n resultado:" + resultado;
    }

    else if(tipo_de_dado == lista_dados[4])
    {
        let resultado = dado_doze();
        document.getElementById('resultado').innerText = "\n resultado:" + resultado;
    }

    else if(tipo_de_dado == lista_dados[5])
    {
        let resultado = dado_dez();
        document.getElementById('resultado').innerText = "\n resultado:" + resultado;
    }



}

// funções de cada dado:

//d4
function dado_quatro(){
    const lista = [1,2,3,4];
    resposta = aleatorio(lista);
    return resposta;
    
}

//d6
function dado_seis(){
    const lista = [1,2,3,4,5,6];
    resposta = aleatorio(lista);
    return resposta;
}

//d8
function dado_oito(){
    const lista = [1,2,3,4,5,6,7,8];
    resposta = aleatorio(lista);
    return resposta;
}

//d20
function dado_vinte(){
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    resposta = aleatorio(lista);
    return resposta;
}

//d12
function dado_doze(){
    const lista = [1,2,3,4,5,6,7,8,9,10,11,12];
    resposta = aleatorio(lista);
    return resposta;
}

//d10
function dado_dez(){
    const lista = [1,2,3,4,5,6,7,8,9,10];
    resposta = aleatorio(lista);
    return resposta;
}

// função que escolhe um elemento aleatório de uma lista
function aleatorio(lista){
    let numero = Math.floor(Math.random(lista) * lista.length);
    
    return lista[numero];
}