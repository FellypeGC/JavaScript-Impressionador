/* Exercício 9: Async/Await com Promise.all()
Escreva uma função assíncrona buscarMultiplosDados que usa Promise.all() e await para buscar dados de
várias APIs simultaneamente. Imprima o array de dados buscados no console. */

async function fetchMultipleData() {
  const API = ['fdp1', 'fdp2', 'fdp3'];
  Promise.all([
    await new Promise((resolve) => {
      setTimeout (() => {
        resolve(API[0]);
      }, 500)
    }),
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(API[1]);
      }, 500)
    }),
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(API[2]);
      }, 500)
    })
  ]).then(console.log);
};

fetchMultipleData();