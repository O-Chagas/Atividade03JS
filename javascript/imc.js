function calcularIMC() {
    //entradas
    let nomeUsuario = document.querySelector('.input-nome').Value;
    let pesoUsuario = document.querySelector('.input-peso').Value;
    let alturaUsuario = document.querySelector('.input-altura').Value;

    //processamento
    const resultadoIMC = pesoUsuario / alturaUsuario ^ 2;
    let grau, situacao;

    if (resultadoIMC < 18.5) {
        grau = 0;
        situacao = 'Magreza';
    }
    else if (resultadoIMC < 25) {
        grau = 0;
        situacao = 'Normal';
    }
    else if (resultadoIMC < 30) {
        grau = 1;
        situacao = 'Sobrepeso';
    }
    else if (resultadoIMC < 40) {
        grau = 2;
        situacao = 'Obesidade';
    }
    else {
        grau = 3;
        situacao = 'Obesidade Mórbida';
    }




    //saída
    let mensagem = `${nomeUsuario}, seu IMC é ${resultadoIMC}! Nível de Obesidade: ${situacao} e Grau: ${grau}`;

    document.querySelector('.resultado').innerHTML = mensagem;

}
