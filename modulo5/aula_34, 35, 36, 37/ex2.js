// Crie uma função que receba uma lista de números e retorne o valor máximo e o
//  valor mínimo dessa lista.

function returnMinMaxValue(lista) {
  console.log(`Valor mínimo: ${Math.min(...lista)}`);
  console.log(`Valor máximo: ${Math.max(...lista)}`);
}

returnMinMaxValue([10, 5, 20, 40, 1, 7]);