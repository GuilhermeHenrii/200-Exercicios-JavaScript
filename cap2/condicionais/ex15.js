function polyndrym(word) {
    // Podemos usar os métodos split, reverse e join.
    // Esses métodos transformam uma sting em array(split), inverte o array(reverse) e transforma-o em uma string novamente (join).
    const wordString = String(word);
    let createWord = [];

    for(let numOfCharacters = wordString.length - 1; numOfCharacters >= 0; numOfCharacters--){
        createWord.push(wordString[numOfCharacters]);
    }

    const wordCreatedInString = createWord.join('');

    if(wordString === wordCreatedInString) return 'Palavra palíndromo';
    else return 'Palavra não palíndromo';
}

console.log(polyndrym('radar'));

// 'ama'
// 'ama'