// ASYNC / AWAIT

// sintaxe - async function nomeDaFuncao() {...await (esperar uma promessa ser resolvida) ...}

async function exemplo() {
  console.log('Iniciamos um programa');

  await esperar(2000);
  console.log('Dado 1 recebido. Pode continuar o programa'); // exemplo: login
 
  await esperar(1000);
  console.log('Dado 1 recebido - agora recebi o dado 2'); // exemplo: login - ver uma foto

  console.log('Fim do programa')
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// exemplo();

// Busca Dados de um servidor - https://jsonplaceholder.typicode.com/todos/1
async function buscarDados() {
  try {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    console.error('Erro:', error);
  }
}

buscarDados();