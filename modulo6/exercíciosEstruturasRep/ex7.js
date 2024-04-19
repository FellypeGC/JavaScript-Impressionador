/* Exercício 1: Contagem de Itens do Cardápio (Recursivo) 
Você é o gerente de uma lanchonete e deseja contar quantos itens diferentes estão no seu cardápio. Crie uma
função recursiva em JavaScript que conte quantos itens diferentes existem no cardápio da lanchonete. */

const cardapioLanchonete = [
  'Hamburguer',
  'Batata Frita',
  'Refrigerante',
  'Milkshake',
  'Hot Dog',
  'Pizza',
  'Nuggets',
]; //6 Elementos - índice 0 ao 5

function contarItensDoCardapio(cardapio) { // 6 -5 - 4...0
  if (cardapio.length === 0) {
    return 0;
  } else {
    cardapio.pop();
    return 1 + contarItensDoCardapio(); // 5 - 4 - 3
  }
}

const totalItens = contarItensDoCardapio(cardapioLanchonete);
console.log(`Total de itens no cardápio: ${totalItens}`);