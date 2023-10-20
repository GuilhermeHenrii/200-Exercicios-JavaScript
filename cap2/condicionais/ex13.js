function calcImc(peso, altura) {
    const imc = peso / (altura * altura);
    if (imc < 18.5) return `IMC: ${imc.toFixed(2)} | Abaixo do peso`;
    else if(imc < 25) return `IMC: ${imc.toFixed(2)} | Normal`;
    else if(imc < 30) return `IMC: ${imc.toFixed(2)} | Sobrepeso`;
    else return `IMC: ${imc.toFixed(2)} | Obesidade`;
};

console.log(calcImc(75, 1.71));
