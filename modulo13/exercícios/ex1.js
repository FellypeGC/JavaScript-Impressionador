/* Exercício 1: Callback Simples
Escreva uma função imprimirMensagem que aceita uma mensagem e uma função de retorno de chamada
(callback). A função deve imprimir a mensagem no console e, em seguida, invocar a função de retorno de
chamada. */

const printMessage = (mensagem, callback) => {
  console.log(mensagem);
  callback();
};

printMessage('Mensagem Teste', () => {
  console.log('Essa msg é resultado de um callback executado');
});

printMessage('Outra msg', () => {
  console.log(`${2 + 3}`);
})

