/* Crie um código JavaScript que inclua uma função chamada tratarErroFuncaoInexistente(). Dentro dessa
função, siga estas etapas:
Utilize um bloco try...catch para lidar com o erro que ocorre ao tentar chamar uma função funcaoInexistente()
que não está definida. Dentro do bloco try, tente chamar a função funcaoInexistente(). No bloco catch, exiba
uma mensagem de erro personalizada usando console.error(). Esta mensagem deve informar que ocorreu um
erro ao tentar chamar uma função que não está definida e incluir o erro capturado na mensagem de erro. */

function tratarErroFuncaoInexistente() {
  try {
    funcaoInexistente();
  } catch (erro) {
    console.error('Erro: Função inexistente.', erro)
  }
}

function funcaoInexistente() {
  console.log('Função existe a partir de agora!')
}

tratarErroFuncaoInexistente();