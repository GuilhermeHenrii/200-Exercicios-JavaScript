function biggerInThree(n1, n2, n3) {
    if(n1 > n2 && n1 > n3) return `${n1} maior`;
    else if(n2 > n1 && n2 > n3) return `${n2} maior`;
    else return `${n3} maior`;
}

console.log(biggerInThree(1.5, 1, 0));