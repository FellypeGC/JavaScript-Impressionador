/* Exercício 8: Tratamento de Erros com Async/Await
Escreva uma função assíncrona obterDados que usa await para buscar dados de uma API após um atraso de 1
segundo. Se ocorrer um erro, capture-o e imprima uma mensagem de erro no console. */

async function getData() {
  console.log('Obtendo dados da API...');
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })

  const dataAPI = {
    exempleData: 'Dado Qualquer',
    exempleDataNumber: 10,
    exampleRandomName: 'fdp'
  }

  try {
    console.log('Dados da API:');
    console.log(`Dado Qualquer: ${dataAPI.exempleData}`);
    console.log(`Número de Dados: ${dataAPI.exempleDataNumber}`);
    console.log(`Nome aleatório: ${dataAPI.exampleRandomName}`);
  } catch(error) {
    console.error(error);
  }
}

getData();