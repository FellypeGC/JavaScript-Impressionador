// Crie uma função que receba um valor investido e uma taxa de juros e retorne o rendimento obtido com esse investimento.
// Função: calcularRendimento

//Entrada: calcularRendimento(1000, 5);
//Saída: 50

function calcularRendimento(valorInvestido, taxaJuros) {
  let rendimento = valorInvestido * (taxaJuros / 100);
  return rendimento;
}

console.log(calcularRendimento(1000, 5));