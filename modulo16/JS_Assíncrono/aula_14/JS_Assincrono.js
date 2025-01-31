function operacaoAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = false; // false

      if (sucesso) {
        resolve('A operação foi bem sucedida');
      } else {
        reject('Houve uma falha na execução');
      }
    }, 2000);
  });
}

operacaoAssincrona()
  .then((resultado) => {
    console.log(`${resultado}. Operação bem-sucedida`);
  })
  .catch((erro) => {
    console.error(`${erro}: Falha na operação`);
  })
  .finally(() => {
    console.log('Operação foi finalizada!');
  })