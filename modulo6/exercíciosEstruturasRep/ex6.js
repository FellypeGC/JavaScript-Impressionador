/* Exercício 6: Gerenciamento de Itens em Falta */

const estoqueLanchonete = {
  hamburguer: 20,
  batataFrita: 15,
  refrigerante: 30,
  milkshake: 10,
};

function atualizarEstoque(estoque, itemFalta, quantidadeAdicionar) {
  if (estoque.hasOwnProperty(itemFalta)) {
    estoque(itemFalta) += quantidadeAdicionar;
    console.log(`Estoque foi atualizado: ${itemFalta}: ${estoque[itemFalta]}`);
  } else {
    console.log('Item não foi encontrado no estoque');
  }
}

console.log('Estoque da Lanchonete:');
console.log(estoqueLanchonete);

let continuarAdicionando = true;
let itemNaoEncontrado = false;

do {
  const itemFalta = 'Hambuerguer';
  const quantidadeAdicionar = 5;

  if (!estoqueLanchonete.hasOwnProperty(itemFalta)) {
    // Se o item não existe no estoque, exiba uma mensagem
    if (!itemNaoEncontrado) {
      console.log(`Item não foi encontrado`);
      itemNaoEncontrado = true;
    }
  } else if (estoqueLanchonete[itemFalta] + quantidadeAdicionar > 50) {
    continuarAdicionando = false;
    console.log(`Limite do estoque ${itemFalta}: ${estoqueLanchonete[itemFalta]} foi atingido!`);
  } else {
    atualizarEstoque(estoqueLanchonete, itemFalta, quantidadeAdicionar);
  }
} while (continuarAdicionando);

console.log('Estoque final');
console.log(estoqueLanchonete);