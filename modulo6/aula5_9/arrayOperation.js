const regularArray = [2, 5, 2, 7, 1, 3, 4, 7];
//                   [2, 6, 4, 10, 5, 8, 10, 14]  
// let count = 0;
for ( let count = 0; count < regularArray.length; count++) {
    regularArray[count] += count;
    // count++;
}

console.log('O array atual é: ', regularArray);