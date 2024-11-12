// Math.min() - retorna o valor minimo encontrado dentro de uma lista de números
// Math.max() - retorna o valor máximo encontrado dentro de uma lista de números

console.log(Math.min([2, 45, 6, 87, 43]));
// console.log(Math.min([2, 45, 6, 87, 43])); // erro - retorna NaN

console.log(Math.max(2, 45, 6, 87, 43));

let lista = [2, 45, 6, 87, 43, 101];
console.log(Math.min(...lista)); // spread operator ... (espalha informações da lista)
console.log(Math.max(...lista));