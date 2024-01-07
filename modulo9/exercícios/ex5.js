/* Exercício 5: Tratamento de Erros com Promises
Crie uma Promise que seja rejeitada com um erro após um atraso de 1 segundo. Use .catch() para lidar com o
erro e imprimir no console. */

function serverConnection() {
  console.log('Conectando-se aos servidores. Por favor, aguarde...')
  const promise = new Promise(reject => {
    setTimeout(() => {
      reject('Falha na conexão com os servidores. Verifique sua conexão com a internet e tente novamente mais tarde.')
    }, 1000);
  }).then(console.log);

  return promise;
};

async function connectionError() {
  try {
    const connecting = await serverConnection();
  } catch (error) {
    console.error(error);
  }
};

connectionError();