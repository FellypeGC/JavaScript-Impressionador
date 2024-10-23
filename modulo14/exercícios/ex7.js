/* Exercício 7: Async/Await Básico
Escreva uma função assíncrona buscarDados que usa await para simular a busca de dados de uma API após
um atraso de 2 segundos. Imprima os dados buscados no console. */

async function fetchData() {
  console.log('Buscando dados da API...');
  const dataAPI = {
    data: 'Dados da API',
  };

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataAPI.data);
    }, 2000);
  }).then(console.log);
};

fetchData();