/* Você está criando uma função para analisar uma lista de vendas e encontrar a
 média de vendas para um determinado mês. Use destructuring para extrair os valores e
 combine filter e reduce para calcular a média. */

 const vendas = [
  { vendedor: 'Ana', valor: 1000, mes: 'Agosto' }, 
  { vendedor: 'Pedro', valor: 1500, mes: 'Agosto' }, 
  { vendedor: 'Maria', valor: 1200, mes: 'Julho' } 
];

const calcularMediaVendas = (vendas, mes) => {
  const vendasDoMes = vendas.filter(({mes: vendaMes}) => vendaMes === mes); // cria uma lista nova apenas com o mês de referência
  const totalVendas = vendasDoMes.reduce((acumulador, { valor }) => acumulador + valor, 0); // acumula o valor das vendas do mês filtrado
  return vendasDoMes.length ? totalVendas / vendasDoMes.length : 0;
}

const media = calcularMediaVendas(vendas, 'Agosto');
console.log(media);