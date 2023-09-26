function calculateFibonacciTerm(termNumber) {
    let lastTerm = 1;
    let secondToLast = 0;

    if (termNumber === 0) {
        return 0;
    }
    // if (termNumber === 1) {
    //     return 1;
    // }
    for (let currentInteration = 1; currentInteration < termNumber; currentInteration++) {
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
        
    }
    return lastTerm;
}

console.log(`O valor do termo número 6 da sequência de fibonacci é ${calculateFibonacciTerm(6)}`);