/* Exercício 10: Async/Await com Tratamento de Erros
Escreva uma função assíncrona obterDadosComFallback que usa try...catch e await para buscar dados de uma
API. Se ocorrer um erro, utilize um valor de fallback e imprima-o no console. */

const times = [
  'Flamengo', //0
  'Fluminense', //1
  'Vasco', //2
  'Botafogo',
  'Corinthians', 
  'Santos',
  'Internacional',
  'Santos',
  'São Paulo',
  'Palmeiras',
  'Cruzeiro',
  'Grêmio',
  'Atlético-MG',
];

function discoverBrazilianChampion2024() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumberBetween0And1 = Math.random();
      if (randomNumberBetween0And1 < 0.2) {
      resolve(Math.floor(times.length * Math.random()));
      }
      reject(new Error('Erro buscando o time campeão'));
    }, 1500);
  })
}

async function getDataWithFallback() {
  try {
    const indice = await discoverBrazilianChampion2024();
    console.log(`O time campeão do Campeonato Brasileiro de 2024 será o ${times[indice]}`)
  } catch (error) {
    console.log(error.message);
  }
}

getDataWithFallback();