// cidadão de primeira classe = funções armazenadas dentro de variáveis, funções callback, funções retornadas por outras.

const armazenaFuncao = function () {
  console.log('Olá, sou uma função anônima dentro de uma variável');
}

armazenaFuncao();

// função nomeada
const soma = function soma(a, b) {
  console.log(a + b);
}

soma(5, 10);

// função arrowfunction
const multiplicar = (a, b) => console.log(a * b);
multiplicar(5, 10);

// setTimeout()
setTimeout(function () {
  multiplicar(5, 10);
}, 4000);

setTimeout(function () {
  multiplicar(3, 20);
}, 3000);

setTimeout(function () {
  multiplicar(5, 2);
}, 5000);