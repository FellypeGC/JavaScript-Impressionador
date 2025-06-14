// (AND) - ambas as condições são verdadeiras
let idade = 20;
let codigoPromocional = true;

let idade2 = 15;

// Verificação se o usuário tem idade suficiente e possui um código
let podeFazerLogin = idade >= 18 && codigoPromocional; // true
console.log(podeFazerLogin);
let podeFazerLogin2 = idade2 >= 18 && codigoPromocional; // false
console.log(podeFazerLogin2);

// || (OR) - apenas uma condição é verdadeira
let loginOr = idade >= 18 || codigoPromocional; // true
let loginOr2 = idade2 >= 18 || codigoPromocional // true
console.log(loginOr);
console.log(loginOr2);

let promocional = false;
console.log(idade2 >= 18 || promocional); // false

// ! (NOT) inverte valor booleano 
let perfilConfigurado = false;

// Verificação se o perfil não está configurado
let alerta = !perfilConfigurado;
console.log(alerta); // true
