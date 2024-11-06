console.log('Exercício 10');
const precoProduto = 200;
const percentualDesconto = 15;

const calcularDesconto = (preco, desconto) => {
  return preco - preco * (desconto / 100);
}

console.log(calcularDesconto(precoProduto, percentualDesconto));

console.log('Exercício 11');

const produtos = [ 
  { nome: 'Camisa', categoria: 'Vestuário' }, 
  { nome: 'Notebook', categoria: 'Eletrônicos' }, 
  { nome: 'Tênis', categoria: 'Calçados' }, 
  { nome: 'Calça', categoria: 'Vestuário' } 
]; 
  
const categoriaDesejada = 'Vestuário';

const filtrarPorCategoria = (produtos, categoria) => {
  return produtos.filter(function(produto) {
    return produto.categoria === categoriaDesejada;
  });
}

console.log(filtrarPorCategoria(produtos, categoriaDesejada));

console.log('Exercício 12');

const vendas = [ 
  { id: 1, valor: 1500 }, 
  { id: 2, valor: 2300 }, 
  { id: 3, valor: 3200 } 
];

// const calcularFaturamentoTotal = (vendas) => {
//   return vendas.reduce(function(total, venda) {
//     return total + venda.valor;
//   }, 0);
// }

const calcularFaturamentoTotal = vendas => vendas.reduce((total, venda) => total + venda.valor, 0);

console.log(calcularFaturamentoTotal(vendas));