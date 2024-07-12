import { EventEmitter } from "node:events";

const eventEmitter = new EventEmitter();

// eventEmitter.on('Evento1 Lançado', 
//   (login, password) => console.log(
//     `Escutei o evento1! O usuário ${login} quer acessar com a senha: ${password}.`
//   )
// );

// eventEmitter.emit(
//   'Evento1 Lançado', 
//   'DanielPorto93', 
//   'CachorrosDesstruindoMinhaMochila'
// );

class CompanySales extends EventEmitter {
  performSale() {
    console.log('Registrando venda no banco de dados...')
    //Lógica de execução de venda de um produto
    super.emit('Venda realizada!');
  }
};

function sendToBigCompanyTV(message) {
  console.log('----------------------------');
  console.log(message);
};

const sales = new CompanySales();
sales.on('Venda realizada!', () => 
  sendToBigCompanyTV('Mais uma venda realizada!')
);
sales.performSale();
