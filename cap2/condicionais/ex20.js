function letterGrades(testScore) {
    if(testScore > 10 || testScore < 0) return 'Nota inválida';

    const gradeMapping = {
        'A': 9.0,
        'B': 8.0,
        'C': 7.0,
        'D': 6.0,
        'F': 0
    }

    for (const grade in gradeMapping) {
        if(testScore >= gradeMapping[grade]) {
            return grade;
        }
    }
}

console.log(letterGrades(4.1));