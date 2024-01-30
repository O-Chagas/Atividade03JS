function calcularIMC() {
    //entradas
    let nomeUsuario = document.querySelector('.input-nome').value;
    let pesoUsuario = parseFloat(document.querySelector('.input-peso').value.replace(',', '.'));
    let alturaUsuario = parseFloat(document.querySelector('.input-altura').value.replace(',', '.'));

    //processamento
    const resultadoIMC = (pesoUsuario / alturaUsuario ** 2).toFixed(2);
    let grau, situacao;
    console.log(resultadoIMC);

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
    let mensagem = `${nomeUsuario}, seu IMC é ${resultadoIMC}! Nível: ${situacao} e Grau: ${grau}`;

    document.querySelector('.resultado').innerHTML = mensagem;

}
