/* Exercício 2: Listagem do Cardápio Digital */

const cardapio = [
  {nome: "Hambúrguer", preco: 10},
  {nome: "Batata frita", preco: 5},
  {nome: "Refrigerante", preco: 3},
  {nome: "Milkshake", preco: 7},
];

function exibirCardapio(cardapio) {
  console.log('Cardápio da Lanchonete: ');
  for (let contador = 0; contador < cardapio.length; contador++) {
    console.log(`${cardapio[contador].nome}: ${cardapio[contador].preco}`)
  }
}

exibirCardapio(cardapio);