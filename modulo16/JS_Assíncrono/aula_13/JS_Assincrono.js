const promise = new Promise((resolve, reject) => {
  let sucesso = true; // false

  if (sucesso) {
    resolve('A operação foi bem sucedida');
  } else {
    reject('Houve uma falha na execução');
  }
});

console.log(promise);

function operacaoAssincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sucesso = Math.random() > 0.5; // 50% sucesso
      
      if (sucesso) {
        resolve('Operação concluída com sucesso!');
      } else {
        reject('Falha na operação');
      }
    }, 2000);
  });
}

console.log(operacaoAssincrona()); // Estado inicial