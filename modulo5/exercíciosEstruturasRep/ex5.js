/* Exercício 5: Adivinhe o Número Secreto para Desconto */

function adivinharNumeroSecreto() {
  const numeroSecreto = Math.floor(Math.random() * 100); // Número secreto entre 0 e 99
  let tentativa;
  let tentativas = 0;

  do {
    tentativa = Math.floor(Math.random() * 100); // Gerando uma nova tentativa aleatória.
    tentativas++;

    if (tentativa === numeroSecreto) {
      console.log(`Parabéns! Você adivinhou o número secreto (${numeroSecreto}) em ${tentativas} tentativas`);
    }
  } while (tentativa !== numeroSecreto);
}

adivinharNumeroSecreto();