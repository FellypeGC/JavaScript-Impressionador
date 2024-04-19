// Exemplo Produtos

let produtos = ['Camiseta', 'Calça', 'Boné', 'Meias']; // 0, 1, 2, 3
let index = 0;

while (index < produtos.length) {
  console.log(`Produto ${index + 1}: ${produtos[index]}`);
  index++;
}

// Exemplo de Vendas 

let vendas = [100, 150, 80, 200]; //530
let totalVendas = 0;
let i = 0;

console.log(index);

while (i < vendas.length) {
  totalVendas += vendas[i]; // totalVendas = totalVendas + vendas[index]; 
  i++;
}
console.log('Total de vendas: ' + totalVendas);

// Exemplo de calcular comissão

let vendas2 = [50, 200, 30, 400, 125]; //805
// 0.5%
let comissaoTotal = 0;
index = 0;

while (index < vendas2.length) {
  comissaoTotal += vendas2[index] * 0.5;
  index++;
}
console.log('Valor da comissão total: ' + comissaoTotal);