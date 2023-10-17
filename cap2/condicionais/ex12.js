function finalGrade(av1, av2) {
    //typeof retorna uma string com o valor do dado. Por isso a condição de typeof de av1 ou av2 serem uma 'string'.

    if(typeof(av1) === 'string' || typeof(av2) === 'string') return 'Digite notas válias'

    // const av1Value = Number(av1);
    // const av2Value = Number(av2);

    // if(isNaN(av1Value) || isNaN(av2Value)) return 'Digite notas válidas';

    const average = (av1 + av2) / 2;
    if(average >= 7){
        return `Média:${average}. Aprovado`;
    } else if(average <= 6.9 && average >= 5) {
        return `Média:${average}. Recuperação`;
    } else {
        return `Média:${average}. Reprovado`;
    }
}

console.log(finalGrade(10, 4));