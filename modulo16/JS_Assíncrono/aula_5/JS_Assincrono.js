// setInterval() - função nativa que permite executar um bloco de código repetidamente

// setInterval(função/callback, tempoEmMilissegundos)

console.log('Inicio');

let intervalo = setInterval(() => {
  console.log('Tarefas sendo feitas');
}, 2000);

setInterval(() => {
  for (let index = 0; index < 5; index++) {
    console.log(`Tarefas: ${index}`);
  }
}, 1000);

console.log('Fim');