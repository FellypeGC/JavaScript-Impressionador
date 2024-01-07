/* Exercício 7: Async/Await Básico
Escreva uma função assíncrona buscarDados que usa await para simular a busca de dados de uma API após
um atraso de 2 segundos. Imprima os dados buscados no console. */

async function fetchData() {
  console.log('Buscando dados da API');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

  const dataAPI = {
    data: 'Dados da API',
  };

  console.log(`Dados encontrados: ${dataAPI.data}`);
};

fetchData();