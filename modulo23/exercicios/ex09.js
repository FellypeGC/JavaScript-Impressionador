/* 
 Exercício 9: Crie um EventEmitter que emite o evento ping a cada segundo. O evento ping
 deve ser emitido no máximo 5 vezes. Após a quinta emissão, o processo deve ser finalizado
 emitindo um evento pingFinished. 
*/

const EventEmitter = require('events');

class PingEmitter extends EventEmitter {
  constructor() {
    super();
    this.contador = 0;
    this.maxPings = 5;
  }

  iniciarPings() {
    const intervalo = setInterval(() => {
      this.contador++;
      if (this.contador <= this.maxPings) {
        this.emit('ping', this.contador);
      } else {
        this.emit('pingFinished');
        clearInterval(intervalo); // Interrompe / limpa o intervalo
      }
    }, 1000);
  }
}

const ping = new PingEmitter();

ping.on('ping', (contagem) => {
  console.log(`Ping número: ${contagem}`);
});

ping.on('pingFinished', () => {
  console.log('O número máximo de pings foi atingido!')
});

ping.iniciarPings();