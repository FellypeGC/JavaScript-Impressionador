//Exemplo Produtos 

let produtos = ['Camiseta', 'Calça', 'Boné', 'Meias']; // 0, 1, 2, 3

let index = 0;

do {
  console.log('Produto' + (index + 1) + ': ' + produtos[index]);
  index++;
} while (index < produtos.length);

// Exemplo de Vendas

let vendas = [100, 150, 80, 200]; //530
let totalVendas = 0;
let indexVendas = 0;

do {
  totalVendas += vendas[indexVendas];
  indexVendas++;
} while (indexVendas < vendas.length);
console.log('Valor total de vendas: ' + totalVendas);

// Exemplo de calcular Comissão

let vendas2 = [50, 200, 30, 400, 125]; //805
// 0.5%

let comissaoTotal = 0;
indexVendas = 0;

do {
  comissaoTotal += vendas2[indexVendas] * 0.5;
  indexVendas++;
} while (indexVendas < vendas2.length);

console.log('Comissão total de vendas: ' + comissaoTotal);