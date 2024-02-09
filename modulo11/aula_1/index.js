function writeMessageOnConsoleAndReturnTwo(message) {
  console.log(message);
  return 2;
}

//palavra-chave function <= 
//nome da função X
//parênteses - parâmetros <=
//bloco de chaves com instruções dentro <=
//instrução de retorno V

const variableThatStoresFunction = function (message){
  console.log(message);
  return undefined;
};

const variableThatStoresFunction2 = function (message) {
  console.log(message);
};

console.log(
  `O retorno da função na primeira variável é: ${variableThatStoresFunction('função da primeira variável')}`
);

console.log(
  `O retorno da função na segunda variável é: ${variableThatStoresFunction2('função da segundaa variável')}`
);