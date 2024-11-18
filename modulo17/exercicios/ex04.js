/* Você está desenvolvendo uma aplicação de catálogo e precisa atualizar uma lista
de produtos adicionando uma nova propriedade emEstoque com o valor true. Use o operador
spread e o método map para criar uma nova lista com essa propriedade adicionada. */

const produtos = [
  { nome: 'Camiseta', preco: 50 }, 
  { nome: 'Calça',preco: 100 }, 
  { nome: 'Tênis', preco: 150 } 
];

const produtosAtualizados = produtos.map(produto => ({
  ...produto,
  emEstoque: true,
}));

console.log(produtosAtualizados);