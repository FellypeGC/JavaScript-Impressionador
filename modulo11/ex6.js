/* Exercício 6: Tratamento de Erro em Divisão por Zero
Crie um código JavaScript que inclua uma função chamada tratarErroDivisaoPorZero(). Dentro dessa função,
siga estas etapas:
Declare duas variáveis chamadas dividendo e divisor e atribua a elas valores numéricos. Verifique se o valor da
variável divisor é igual a zero. Se o divisor for igual a zero, lance um erro intencionalmente usando throw new
Error(). Este erro deve indicar que a divisão por zero não é permitida. Utilize um bloco try...catch para lidar
com o erro que ocorre ao tentar realizar uma divisão por zero. No bloco catch, exiba a mensagem de erro
capturada no console usando console.error(). */

function tratarErroDivisaoPorZero() {
  try {
    const dividendo = 10;
    const divisor = 10;

    if (divisor === 0) {
      throw new Error('Divisão por zero não é permitida');
    }
    const resultado = dividendo / divisor;
    console.log('Resultado da divisão:',resultado);
  } catch (error) {
    console.error(error.message);
  }
}

tratarErroDivisaoPorZero();