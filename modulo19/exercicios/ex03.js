/* Você está criando uma função para calcular o total de vendas de uma série de
transações. Use parâmetros rest para aceitar uma lista de valores e o método reduce para
somar todos os valores. */

function calcularTotalVendas(...transacoes) {
  return transacoes.reduce((acumulador, valor) => acumulador + valor, 0);
}

const totalVendas = calcularTotalVendas(100, 200, 300, 400, 500);
console.log(totalVendas);