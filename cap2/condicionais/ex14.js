const bissexto = (yearValue) => {
    //const yearValueString = String(yearValue);
    const ano = new Date(`${yearValue}T00:00:00`).getFullYear();
    // anos divisiveis por 4 que não são divisiveis por 100 são bisextos
    // se o ano é divisivel por 100 e é divisivel por 400 ele também é bisexto
    // exceto essas condições, o ano não é bissexto  
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) return 'Bissexto';
    else return 'Não é bissexto';
};

console.log(bissexto(2200));