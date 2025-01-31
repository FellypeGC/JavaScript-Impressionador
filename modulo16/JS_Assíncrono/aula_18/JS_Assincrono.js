const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Primeira Promise resolvida!'), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Segunda Promise resolvida!'), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve('Terceira Promise resolvida!'), 3000);
});

// Promise.all - Executa todas as promises e retorna uma única promise
//  que resolve quando todas as promises no array resolvem.

Promise.all([promise1, promise2, promise3])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.race - Executa todas as promisses e retorna uma única promise que 
// resolve ou rejeita assim que a primeira promise no array resolver ou rejeitar.

Promise.race([promise1, promise2, promise3])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error);
  });

async function buscarInformacoes() {
  // await promise1; 
  // await promise2; 
  // await promise3; 
  try {
    await Promise.all([promise1, promise2, promise3]);
  } catch (error) {
    console.error(error);
  }
}