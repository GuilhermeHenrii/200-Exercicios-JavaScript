class Cnh {
    constructor(age) {
        this.age = age;
    }

    checkCnh(){
        if(!this.age) return;
        const result = this.age >= 18 ? 'Candidato ápto' :'Candidato inápto';
        return result;
    }
}

const person = new Cnh(19);
console.log(person.checkCnh());