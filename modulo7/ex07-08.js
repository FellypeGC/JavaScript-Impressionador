//? Exercício 7: Crie uma função que receba uma frase e retorne a quantidade de vogais contidas
//? nela.

function contarVogais(frase) {
  const vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù'];
  let totalVogais = 0;
  frase = frase.toLowerCase();

  for (const char of frase) {
    if (vogais.includes(char)) {
      totalVogais++;
    }
  }

  return totalVogais;
}

console.log(contarVogais("Olá, tudo bem?"));

//? Requisito 8: Crie uma função que receba um array de gastos e retorne a quantidade de vezes
//? que o maior gasto aparece nesse array.

function maiorGasto(gastos) {
  const maior = Math.max(...gastos);
  const quantidade = gastos.filter(gasto => gasto === maior).length;

  return quantidade;
}

console.log(maiorGasto([10, 5, 20, 15]));