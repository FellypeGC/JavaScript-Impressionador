//? Requisito 11: Crie uma função que receba um número inteiro e retorne um booleano
//? indicando se o número é primo.

function ehPrimo(num) {
  if (num < 2) {
    return false;
  };

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(ehPrimo(7));
console.log(ehPrimo(4));

//? Requisito 12: Crie uma função que receba uma frase e retorne a quantidade de palavras que
//? ela contém.

function contarPalavras(frase) {
  let totalPalavras = 0;
  const fraseDividida = frase.split(" ")

  for (const palavra of fraseDividida) {
    if (fraseDividida.includes(palavra)) {
      totalPalavras++;
    }
  }

  return totalPalavras;
}

console.log(contarPalavras("Olá, tudo bem?"));