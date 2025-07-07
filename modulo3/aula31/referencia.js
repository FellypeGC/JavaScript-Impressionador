let listaA = [1, 2, 3];
let listaB = listaA;
listaB[0] = 99;

console.log(listaA);
console.log(listaB);

// let string = "Olá";
// let mensagem = string;
// mensagem = "Olá, bem-vindo";

// console.log(string);
// console.log(mensagem);

let objA = { nome: "José" };
let objB = objA;
objB.idade = 34;

console.log(objB);
console.log(objA);

let listaC = [...listaA];
console.log(listaC);
listaC[3] = 100;

console.log(listaC);
console.log(listaA);

let objC = { ...objA };
objC.corDeCabelo = "Castanho";

console.log(objC);
console.log(objA);