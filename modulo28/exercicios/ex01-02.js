/* Crie um programa Node.js onde você tenha um EventEmitter. Emita um evento
chamado mensagemRecebida e ouça esse evento para exibir a mensagem "Mensagem
recebida com sucesso!". */
const EventEmitter = require('events');

EventEmitter.addListener('mensagemRecebida', () => {
  console.log('Mensagem recebida com sucesso!');
});

// eventEmitter.emit('mensagemRecebida');

/* Exercício 2: Altere o código anterior para que o evento mensagemRecebida aceite um
argumento contendo a mensagem recebida e exiba essa mensagem no console. */

EventEmitter.addListener('mensagemRecebida', (msg) => {
  console.log(msg);
});

EventEmitter.emit('mensagemRecebida', 'Mensagem recebida com sucesso novamente!');

