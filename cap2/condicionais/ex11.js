function apto(idade) {
    if (idade >= 18 && idade <= 69) {
        return 'Obrigatório';
    } else if (idade === 16 || idade === 17 || idade >= 70) {
        return 'Facultativo';
    } else {
        return 'Inápto';
    }
}

console.log(apto(17));