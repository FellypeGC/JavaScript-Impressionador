//? Requisito 1: : Crie uma função que receba dois números inteiros e retorne a soma deles.
//? Função: somar

function somar(a, b) {
  return a + b;
}

console.log(somar(5, 3));

//? Requisito 2: Crie uma função que receba um array de nomes e retorne esse array ordenado
//? emordem alfabética. Função: ordenarNomes

function ordernarNomes(namesArray) {
  const ordenedNamesArray = namesArray.sort();
  console.log(ordenedNamesArray);
}

ordernarNomes(['Ana', 'Elias', 'Carlos', 'Beatriz']);