/* Exercício 3: Listagem de Itens do Cardápio */

// for (variável in objeto) {}

const cardapio = {
  Hambúrguer: 10,
  'Batata Frita': 5,
  Refrigerante: 2,
  Milkshake: 7,
};

function listarItensDoCardapio(cardapio) {
  for (const item in cardapio) {
    console.log(`${item}: R$${cardapio[item]}`);
  }
}

listarItensDoCardapio(cardapio);