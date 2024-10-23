const fluminenseCampeaoLibertadores = true;

const promessa = new Promise((resolve, reject) => {
  console.log('Prometo que vou te pagar!');
  setTimeout(() => {
    if (fluminenseCampeaoLibertadores) {
      resolve(
        'Toma aqui seu pagamento! Exatamente como combinamos.'
      );
    } else {
      reject(
        'Não acredito que ele perdeu! Infelizmente não vou conseguir de pagar!'
      );
    }
  }, 2000);
})

promessa.then((response) => {
  console.log(response);
  console.log('Poow, nem acredito que tu me pagou!');
}).catch(error => console.error(error));

