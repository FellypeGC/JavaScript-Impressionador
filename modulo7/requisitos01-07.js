const valorInicial = 1000; // Valor inicial investido
const taxaMensal = 1.5; // Taxa de rendimento mensal em %
const meses = 12; // Duração do investimento

function simularInvestimento(valorInicial, taxaMensal, meses) {
  let saldoFinal = valorInicial;
  for (let i = 1; i <= meses; i++) {
    saldoFinal += saldoFinal * (taxaMensal / 100);
  }

  return saldoFinal.toFixed(2);
}

//console.log(simularInvestimento(valorInicial, taxaMensal, meses)); //1195.62

const despesas = {
  alimentacao: 500,
  transporte: 150,
  aluguel: 1200,
  lazer: 200,
};

function gerenciarDespesas(despesas) {
  let totalDespesas = 0;
  for (let categoria in despesas) {
    totalDespesas += despesas[categoria]; // Somar o valor de cada categoria
  }

  return totalDespesas;
}

//console.log(gerenciarDespesas(despesas)); //2050

function obterMesAtual() {
  const meses = [
    'Janeiro', 
    'Favereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ];

  const dataAtual = new Date(); // Criar uma instância e podemos utilizar os métodos desse objeto
  return meses[dataAtual.getMonth()]; // Retorna o mês atual - elemento do indice retornando a string correta
}

// console.log(obterMesAtual());

const metaInvestimento = 1500; 
const metaOrcamento = 2000;

function gerarRelatorio(
  investimentoInicial, 
  taxa, 
  meses, 
  despesas,
  metaInvestimento,
  metaOrcamento
) {
  const saldoInvestimento = simularInvestimento(
    investimentoInicial, 
    taxa, 
    meses
  );
  const totalDespesas = gerenciarDespesas(despesas);
  const mesAtual = obterMesAtual();

  console.log(`Mês: ${mesAtual}`);
  console.log(`Saldo final do investimento: R$ ${saldoInvestimento}`);
  console.log(`Total de despesas: R$ ${totalDespesas}`);

  const economia = metaOrcamento - totalDespesas;
  if (economia > 0) {
    console.log(`Parabéns! Você economizou R$ ${economia}`);
  } else {
    console.log(`Você excedeu seu orçamento em R$ ${Math.abs(economia)}`);
  }

  if (saldoInvestimento >= metaInvestimento) {
    console.log('Meta de investimento atingida!');
  } else {
    console.log('Você não atingiu a meta de investimento');
  }

  for (const categoria in despesas) {
    console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: R${despesas[categoria]}`);
  }
}

gerarRelatorio(valorInicial, taxaMensal, meses, despesas, metaInvestimento, metaOrcamento);

const despesas2 = {
  condominio: 800,
  escola: 500,
  academia: 150,
  agua: 60,
  luz: 120,
  lazer: 300,
}

const valorInicial2 = 1000;
const taxaMensal2 = 1.5;
const meses2 = 12;
const metaInvestimento2 = 1500;
const metaOrcamento2 = 2000;

gerarRelatorio(
  valorInicial2,
  taxaMensal2,
  meses2, 
  despesas2,
  metaInvestimento2,
  metaOrcamento2
);