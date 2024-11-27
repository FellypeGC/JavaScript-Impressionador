/* Exercício 1: Crie um código JavaScript que inclua uma função chamada tratarErroVariavelNaoDefinida(). Dentro dessa
função, siga estas etapas:

Utilize um bloco try...catch para lidar com o erro que ocorre ao tentar acessar a variável variavelNaoDefinida
(que não foi definida). No bloco catch, exiba uma mensagem de erro personalizada usando console.error().
Esta mensagem deve informar que ocorreu um erro ao tentar acessar uma variável não definida e incluir o
erro capturado na mensagem de erro. */

function tratarErroVariavelNaoDefinida() {
  try {
    console.log(variavelNaoDefinida);
  } catch (erro) {
    console.error('Erro: Não foi possível acessar a variável', erro);
  }
}

const variavelNaoDefinida = 'Agora a variável está definida.';
tratarErroVariavelNaoDefinida();