function diferençaEntreVariaveis() {
    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);

    if (numero1 > numero2) {
        document.getElementById('resultadoa').innerHTML = numero1 - numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultadoa').innerHTML  = 0;
    }
    else{
        document.getElementById('resultadoa').innerHTML  = numero2 - numero1;
    }

}

function dobroXmaisTriploY() {

    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);
    document.getElementById('resultadob').innerText  = (2 * numero1 + 3 * numero2);
}

function multEDivXY() {
    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value); 

    document.getElementById('resultadoc').innerText = numero1 * numero2;

}

function colocaEmOrdem() {
    const numero1 = parseFloat(document.getElementById('a').value);
    const numero2 = parseFloat(document.getElementById('b').value);

    if (numero1 > numero2) {
        document.getElementById('resultadod').innerHTML = numero1 + ', ' + numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultadod').innerHTML  = numero1 + ', ' + numero2;
    }
    else{
        document.getElementById('resultadod').innerHTML  = (numero2 + ', ' + numero1);
    }

}