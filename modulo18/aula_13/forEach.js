let numeros = [1, 2, 3, 4, 5];

//Sintaxe: Array.forEach((elemento, index, array) => { intrução });

// numeros.forEach((numero) => console.log(numero));

// for (i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// const novaListaDeNumeros = numeros.map((numero) => numero);
// console.log(novaListaDeNumeros);

let controle = 0;

numeros.forEach(numero => {
  controle += numero;
});

console.log(controle);

const usuarios = [
  { nome: 'Alice', idade: 25},
  { nome: 'Bob', idade: 30 },
  { nome: 'Charlie', idade: 35 },
];

usuarios.forEach((usuario) => {
  console.log(usuario.idade);
});