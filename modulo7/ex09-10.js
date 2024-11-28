//? Requisito 9: Crie uma função que receba um array de números e retorne a média desses
//? números.

function calcularMedia(numerosArray) {
  const soma = numerosArray.reduce((acc, num) => acc + num, 0);
  const media = soma / numerosArray.length;

  return media
}

console.log(calcularMedia([10, 20, 30, 40]));

//? Exercício 10: Crie uma função que receba uma palavra e retorne um booleano indicando se a
//? palavra é um palíndromo.

function ehPalindromo(palavra) {
  const palavraEhPalindromo = palavra.split("").reverse().join("");

  if (palavraEhPalindromo === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("cachorro"));