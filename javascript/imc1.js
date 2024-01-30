const botaoCalcularIMC = document.querySelector('.btn-calcular');
let nomeUsuario, pesoUsuario, alturaUsuario;

botaoCalcularIMC.addEventListener('click', () => {
    nomeUsuario = document.querySelector('.input-nome').value;
    pesoUsuario = parseFloat(document.querySelector('.input-peso').value.replace(',', '.'));
    alturaUsuario = parseFloat(document.querySelector('.input-altura').value.replace(',', '.'));
    mostrarResultadoIMC();
});

function calcularIMC(peso, altura) {
    return imc = (peso / altura ** 2).toFixed(2);
}

function verificarGrauObesidade(imc) {
    if (imc < 18.5) {
        return 'Grau 0 - Magreza';
    }
    else if (imc < 25) {
        return 'Grau 0 - Normal';
    }
    else if (imc < 30) {
        return 'Grau 1 - Sobrepeso';
    }
    else if (imc < 40) {
        return 'Grau 2 - Obesidade';
    }
    else {
        return 'Grau 3 - Obesidade Grave';
    }

}

function mostrarResultadoIMC() {
    let imc = calcularIMC(pesoUsuario, alturaUsuario);
    let grauObesidade = verificarGrauObesidade(imc);
    mensagem = `${nomeUsuario}, Seu IMC é: ${imc}! ${grauObesidade}`;
    document.querySelector('.resultado').innerHTML = mensagem;
}