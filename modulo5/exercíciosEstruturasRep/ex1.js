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