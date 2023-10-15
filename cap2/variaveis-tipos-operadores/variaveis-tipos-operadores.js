//Exercicio 1
const age = 25;
const weight = 65;
console.log(age, weight);

//Exercicio 2
const pi = (3.14159).toFixed(3);
console.log(pi);

//Exercicio 3
const maxNumber = Number.MAX_VALUE;
console.log(maxNumber);

//Exercicio 4
const firstName = 'Guilherme';
const lastName = 'Silva';
console.log(`${firstName} `.concat(`${lastName}`));

//Exercicio 5
const numberOne = 50;
const numberTwo = 100;
console.log(numberOne + numberTwo);
const division = (numberOne + numberTwo) / 10;
console.log(division);

//Exercicio 6
// precedencia ! -> && -> ||
const verdade = true;
const mentira = false;
console.log(verdade || mentira && mentira || !verdade);

//Exercicio 7
const numOne = 10;
const numTwo = 20;
const numThree = 9;
console.log(numOne > numTwo < numThree); // não é uma boa prática

//Exercicio 8
let number = 0; //devemos usar let pois const nao pode ter seu valor reatribuído
number++;
number++;
number--;
console.log(number);