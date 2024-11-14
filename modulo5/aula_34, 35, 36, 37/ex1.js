// Você precisa criar uma função que receba um número decimal e o arredonde de
//  três formas diferentes: para baixo, para cima e para o valor inteiro mais próximo. Mostre o
//  resultado de cada arredondamento no console.

let numero = 7.89;

function arredondamento(num) {
  console.log(`Arredondado para baixo: ${Math.floor(numero)}`); //console.log(`Arredondado para baixo: ${parseInt(numero)}`);
  console.log(`Arredondado para cima: ${numero.toFixed()}`); //Math.ceil(numero); - Retorna o menor número inteiro maior ou igual a "x".
  console.log(`Arredondado para o valor mais próximo: ${Math.round(numero)}`);
}

arredondamento(numero);