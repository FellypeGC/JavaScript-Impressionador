/* Exercício 4: Encadeamento de Promises
Crie duas Promises: uma que seja resolvida para "Olá" após um atraso de 1 segundo e outra que seja resolvida para "Mundo" após um atraso de 2 segundos. Encadeie essas Promises usando .then() para imprimir "Olá, Mundo" no console. */

async function promises() {
   const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Olá,');
      }, 1000);
    }).then(console.log);

  const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Mundo');
      }, 2000);
  }).then(console.log);
}

promises();