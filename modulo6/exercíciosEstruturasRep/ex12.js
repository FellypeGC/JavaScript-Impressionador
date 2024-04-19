/* Exercício 7: Calcular o Total da Conta */

const cardapio = {
  Hamburguer: 10,
  BatataFrita: 5,
  Refrigerante: 2,
  Milkshake: 7,
};

const pedidoCliente = [
  { nome: 'Hamburguer', quantidade: 2 },
  { nome: 'BatataFrita', quantidade: 1 },
  { nome: 'Refrigerante', quantidade: 3 }
];

function calcularTotalDaConta(cardapio, pedidoCliente) {
  let totalConta = 0;

  for (const pedido of pedidoCliente) {
    if (pedido.nome in cardapio) {
      totalConta += cardapio[pedido.nome] * pedido.quantidade;
    }
  }
  return totalConta;
}

const totalConta = calcularTotalDaConta(cardapio, pedidoCliente);
console.log(`Total da conta: R$${totalConta}`);