// Converta valores de texto em números
// Imagine que você tem valores em formato de texto, como "150.50" ou "200px". Seu objetivo é
// convertê-los para números reais.

let numString = '150.50';
let numString2 = '200px';
let string = 'abc';

console.log(Number.parseFloat(numString).toFixed(2));
console.log(Number.parseInt(numString2));
console.log(Number(string));