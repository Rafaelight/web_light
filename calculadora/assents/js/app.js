function sumar() {
    let value1 = parseInt(document.getElementById('valor-1').value);
    let value2 = parseInt(document.getElementById('valor-2').value);
    let resultado = value1 + value2;
    document.getElementById('resultado').value = resultado;
}

function restar() {
    let value1 = parseInt(document.getElementById('valor-1').value);
    let value2 = parseInt(document.getElementById('valor-2').value);
    let resultado = value1 - value2;
    document.getElementById('resultado').value = resultado;
}

function multiplicar() {
    let value1 = parseInt(document.getElementById('valor-1').value);
    let value2 = parseInt(document.getElementById('valor-2').value);
    let resultado = value1 * value2;
    document.getElementById('resultado').value = resultado;
}

function dividir() {
    let value1 = parseInt(document.getElementById('valor-1').value);
    let value2 = parseInt(document.getElementById('valor-2').value);
    let resultado = value1 / value2;
    document.getElementById('resultado').value = resultado;
}
