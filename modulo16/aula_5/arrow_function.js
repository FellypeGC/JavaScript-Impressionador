function writeUserMessageOnConsole(message) {
  console.log(message);
}

writeUserMessageOnConsole('Escreva esse argumento no console');

const writeUserMessageVariableFunction = function (message) {
  console.log(message);
}

writeUserMessageVariableFunction('Escreva esse argumento no console - Versão variável');

const writeUserMessageArrowVersion = (message) => {
  console.log(message);
}

writeUserMessageArrowVersion('Escreva esse argumento no console - Versão Arrow Function ~ Flecha');

const variavelQueAbrigaArrowFunction = () => {
  console.log('essa é uma função!')
};

variavelQueAbrigaArrowFunction();

const soma = (n1, n2) => {
  return n1 + n2;
} 

const resultado = soma(4, 5);
console.log(`O resultado entre a soma dos números 4 e 5 é: ${resultado}`);