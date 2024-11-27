/* Exercício 3: Tratamento de Erro ao Acessar Propriedade de null
Crie um código JavaScript que inclua uma função chamada tratarErroAcessarPropriedadeNull(). Dentro dessa
função, siga estas etapas:
Declare uma variável chamada objeto e atribua a ela o valor null. Tente acessar uma propriedade chamada
propriedade do objeto objeto e armazene o resultado em uma variável. Utilize um bloco try...catch para lidar
com o erro que ocorre ao tentar acessar a propriedade de um valor null. No bloco catch, exiba uma
mensagem de erro personalizada usando console.error() que informe que ocorreu um erro e inclua o erro
capturado na mensagem de erro. */

function tratarErroAcessarPropriedadeNull() {
  try {
    const objeto = {chave: 'valor'};
    console.log(objeto.chave);
  } catch (error) {
    console.error('Ocorreu um erro: ', error)
  }
}

tratarErroAcessarPropriedadeNull();