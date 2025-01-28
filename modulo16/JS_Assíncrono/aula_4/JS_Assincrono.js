// setTimeout() - função nativa que permite executar um bloco de código depois de um intervalo de tempo determinado (milissegundos).

// setTimeout(callback, tempo);

console.log('Inicio do programa');

setTimeout(function () {
  console.log('Olá, mundo assíncrono');
}, 2000);

console.log('Fim do programa');