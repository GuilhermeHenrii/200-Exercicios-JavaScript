function pairOrOdd(n1){
    if(typeof(n1) !== 'number') return 'Digite um número válido';

    const pairOrOdd = n1 % 2 === 0 ? 'Par' : 'Ímpar';
    return pairOrOdd;
};

console.log(pairOrOdd(50));


// const data = 'eu';
// console.log(typeof(data));

// const nan = 'eu' === NaN? true:false;
// console.log(nan);