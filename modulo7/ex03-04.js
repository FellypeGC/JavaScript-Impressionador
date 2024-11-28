//? Requisito 3: Crie uma função que receba dois valores e retorne verdadeiro se ambos forem
//? considerados "truthy".

function compararValores(v1, v2) {
  return !!v1 && !!v2;
}

console.log(compararValores(5, "texto"));
console.log(compararValores(0, "texto"));

//? Requisito 4: Crie uma função que receba um valor investido e uma taxa de juros e retorne o
//? rendimento obtido com esse investimento.
//? Função: calcularRendimento

function  calcularRendimento(valorInvestido, taxaJuros) {
  const rendimento = (valorInvestido * taxaJuros) / 100;
  return rendimento;
}

console.log(calcularRendimento(1000, 5));