function calculoINSS() {
    const nome1 = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salarioBruto').value);
    const valorINSS = salario * 0.08;
    const salarioLiq = salario - valorINSS;

    document.getElementById('nomee').innerText = nome1;
    document.getElementById('salarioBrutoo').innerText = salario;
    document.getElementById('valorINSS').innerText = valorINSS;
    document.getElementById('salarioLiq').innerText = salarioLiq;
   
}


function descontoINSSporSalario() {
    const salario2 = parseFloat(document.getElementById('salarioBruto').value);
    const nome3 = document.getElementById('nome').value;
    console.log("Vamos calcular seu desconto do INSS baseado no quanto você ganha!")


    if (salario2 < 1000.01 ) {
        const valorDesconto = salario2 * 0.08;
        console.log("Seu nome: " + nome3)
        console.log("O valor do desconto é de: R$" + valorDesconto)
        const salarioDescontado = salario2 - valorDesconto
        console.log("O seu salário já descontado é de: R$" + salarioDescontado)

    }
    else if (salario2 > 1500 ){
        const valorDesconto = salario2 * 0.09;
        console.log("Seu nome: " + nome3)
        console.log("O valor do desconto é de: R$" + valorDesconto)
        const salarioDescontado = salario2 - valorDesconto
        console.log("O seu salário já descontado é de: R$" + salarioDescontado)
        
    }
    else {
        const valorDesconto = salario2 * 0.085;
        console.log("Seu nome: " + nome3)
        console.log("O valor do desconto é de: R$" + valorDesconto)
        const salarioDescontado = salario2 - valorDesconto
        console.log("O seu salário já descontado é de: R$" + salarioDescontado)
    }
}