let string = 'Olá, Mundo!';

console.log(string.toUpperCase()); // Letras maiúsculas
console.log(string.toLowerCase()); // Letras minúsculas 

// slide(start, end)
// console.log([5]);

console.log(string.slice(0, 5));
console.log(string.slice(-6)); // de trás para frente - inverso

// substring(start, end)
console.log(string.substring(0, 5));
//console.log(string.substring(-6)); // converter 0 = substring(0);
console.log(string.substring(7, 3)); // inverte os valores (3, 7);