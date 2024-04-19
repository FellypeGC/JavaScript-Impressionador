const promise1 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('Código do primeiro aluno');
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(()=> {
    resolve('Código do segundo aluno');
  }, 2300);
});

//Promise.all([promise1, promise2]).then(console.log);
Promise.race([promise1, promise2]).then(console.log);


// async function generateTotalPrice() {
//   const startTime = Date.now();

//   Promise.all([
//     new Promise((resolve, reject) => {
//       setTimeout(()=> {
//         resolve(1500);
//       }, 2000);
//     }),

//     new Promise((resolve, reject) => {
//     setTimeout(()=> {
//       resolve(3500);
//     }, 2000);
//     })
//   ]).then(console.log).then(()=> {
//     const endTime = Date.now();
//     console.log(`elapsedTime ${endTime - startTime}ms`);
//   })
// };

// generateTotalPrice();