// Você deve criar uma função que gere três tipos de números aleatórios: um entre 0
//  e 1, outro entre 0 e 100, e um número inteiro aleatório entre dois valores específicos. Exiba os
//  resultados no console.

function randomNumber(min, max) {
  const randomBetween0and1 = Number(Math.random().toFixed(2)); // 0 e 1
  const randomBetween0and100 = Math.random() * 100; // 0 - 100
  const randomMaxMin = Math.random() * (max - min) + min; // faixa min-max 0.1 * (100-50) = 50 + 50 = max 100.

  console.log(`Aleatório entre 0 e 1: ${randomBetween0and1}`);
  console.log(`Aleatório entre 0 e 100: ${randomBetween0and100}`);
  console.log(`Aleatório entre ${max} e ${min}: ${randomMaxMin}`);
}

randomNumber(50, 100);