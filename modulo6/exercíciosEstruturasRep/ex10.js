/* Exercício 4: Calcular o Total da Conta */

const cardapio = {
  Hamburguer: 10,
  BatataFrita: 5,
  Refrigerante: 2,
  Milkshake: 7,
};

const pedidoCliente = {
  Hamburguer: 4,
  BatataFrita: 1,
  Refrigerante: 3,
  Milkshake: 2,
}

function calcularTotalDaConta(cardapio, pedidoCliente) {
  let totalConta = 0;

  for (const item in pedidoCliente) { //item = Hamburguer
    if (item in cardapio) { //item = Hamburguer
      totalConta += cardapio[item] * pedidoCliente[item]
    }
  }
  return totalConta;
}

const totalConta = calcularTotalDaConta(cardapio, pedidoCliente);
console.log(`Total da conta: ${totalConta}`);