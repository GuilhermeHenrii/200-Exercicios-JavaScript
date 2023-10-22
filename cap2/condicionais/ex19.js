class RangeOfNumbers{
    constructor(numCheck, inferiorRange, upperRange){
        this.numCheck = numCheck;
        this.inferiorRange = inferiorRange;
        this.upperRange = upperRange;
    };

    checkTheRange(){
        const range = [];
    
        for(let i = this.inferiorRange; i <= this.upperRange; i++){
            range.push(i);
            console.log(i);
            if(i === this.numCheck) return 'Número encontrado';
        }
        
        return range.indexOf(this.numCheck) === -1 ? 'Não está no range' : 'Está no range'; 
    };
}

const user = new RangeOfNumbers(10, 5, 50);
console.log(user.checkTheRange());