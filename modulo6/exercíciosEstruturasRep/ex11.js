/* Exercício 5: Listagem de Itens do Cardápio */

const cardapioLanchonete = [
  "Hamburguer",
  "Batata Frita",
  "Refrigerante",
  "Milkshake",
  "Hot Dog",
  "Pizza",
  "Nuggets",
  "Suco",
];

function listarItemDoCardapio(cardapio) {
  for (const item in cardapio) {
    console.log(item);
  }
}

listarItemDoCardapio(cardapioLanchonete);