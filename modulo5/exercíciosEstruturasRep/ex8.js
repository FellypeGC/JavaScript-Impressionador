/* Exercício 2: Cálculo do Valor Total de Vendas (Recursivo) */

const vendasDiarias = [
  20, 15, 25, 18, 22, 30, 28, 24, 27, 23, 19, 21, 26, 17, 16, 29, 31, 14, 20,
  22, 18, 24, 25, 30, 28, 27, 29, 26, 21, 17,
]; // 0

const precoPorHamburguer = 10;

function calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia) {
  // Caso base - ponto de parada => CONDIÇÂO 
  if (dia >= vendasDiarias.length) {
    return 0;
  }

  // Caso recursivo
  const valorVendaDiaAtual = vendasDiarias[dia] * precoPorHamburguer;
  const valorDoProximoDia = calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia + 1);

  return valorVendaDiaAtual + valorDoProximoDia;
}

const totalDeVendas = calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, 0)
console.log(`O valor total das vendas no mês: ${totalDeVendas}`);