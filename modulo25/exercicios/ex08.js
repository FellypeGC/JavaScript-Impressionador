/* 
 Exercício 8: Crie um sistema de log que herda de EventEmitter e registra todos os eventos
 emitidos, como login, logout e error. O sistema deve armazenar as mensagens de log e,
 ao final de cada dia (simulado por um intervalo de tempo de 5 segundos), emita um evento
 dailyLogReport com um resumo de todos os logs do dia. 
*/
const EventEmitter = require('events');

class SistemaLogin extends EventEmitter {
  constructor() {
    super();
    this.logs = []; // lista de dados (logs) - objeto
    this.intervalId = null;
    this.iniciarRelatorioDiario();
  }

  registrarEvento(evento, mensagem) {
    const log = {
      evento,
      mensagem,
      data: new Date().toISOString(), // Cria um log único
    };
    this.logs.push(log);
    this.emit('eventoRegistrado', log); // Emite o evento quando o log é registrado
  }

  iniciarRelatorioDiario() {
    this.intervalId = setInterval(() => {
      this.emit('dailyLogReport', this.logs);
      this.logs = []; // Limpar os logs após o relatório
    }, 5000);
  }

  pararRelatorio() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Interromper o setInterval
      console.log('Relatório diário interrompido');
    }
  }
}

const sistema = new SistemaLogin();

sistema.on('eventoRegistrado', (log) => {
  console.log(`Evento Registrado: ${log.evento} - ${log.mensagem}, data: ${log.data}`);
});

sistema.on('dailyLogReport', (logs) => {
  console.log('Relatório diário de logs: ');
  logs.forEach((log) => {
    console.log(`${log.evento}: ${log.mensagem}. Data: ${log.data}`);
  });
});

sistema.registrarEvento('login', 'Usuário admin fez login');
sistema.registrarEvento('logout', 'Usuário admin fez logout');
sistema.registrarEvento('error', 'Erro ao carregar');

setTimeout(() => {
  sistema.pararRelatorio();
}, 10000);

// const dataTeste = new Date();
// console.log(typeof dataTeste);
// const dataIso = new Date().toISOString();
// console.log(typeof dataIso);