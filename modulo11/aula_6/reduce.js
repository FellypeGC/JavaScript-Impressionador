const faturamento = [
  150_000, 110_000, 90_000, 70_000, 100_000, 120_000, 130_000, 95_000, 120_000,
  130_000, 120_000, 165_000,
];

//map
const faturamentoEmReais = faturamento.map(
  valorFaturamentoMensal => 4.79 * valorFaturamentoMensal
);

// console.log(faturamentoEmReais);

//filter 
const faturamentoMaiorDoQueDesejado = faturamento.filter(
  valorFaturamentoMensal => valorFaturamentoMensal >= 130_000
);

// console.log(faturamentoMaiorDoQueDesejado);



// let faturamentoAnual = 0

// for (let i = 0; i < faturamento.length; i++) {
//   faturamentoAnual += faturamento[i];
// }

// console.log(`O faturamento anual foi de ${faturamentoAnual}`);
// console.log(`O faturamento médio do último ano foi de ${faturamentoAnual / faturamento.length}`);


//reduce
const faturamentoAnual = faturamento.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0);

console.log(`O faturamento anual foi de ${faturamentoAnual}`);
console.log(`O faturamento médio do último ano foi de ${faturamentoAnual / faturamento.length}`);

