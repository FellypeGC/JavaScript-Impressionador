/* Exercício 1: Cálculo do Faturamento Semanal */

const vendasPorDia = [20, 15, 25, 18, 22, 30, 28];
const precoPorHamburguer = 10;

function calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer) {
  let faturamentoSemanal = 0;
  for (let index = 0; index < vendasPorDia.length; index++) {
    faturamentoSemanal += vendasPorDia[index] * precoPorHamburguer;
  }
  return faturamentoSemanal;
}

const faturamentoTotal = calcularFaturamentoSemanal(vendasPorDia, precoPorHamburguer);

console.log(`O faturamento total da semana é R$${faturamentoTotal}`);

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