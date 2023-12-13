/* Exercício 4: Tratamento de Erro em Acesso a Propriedade Inexistente
Crie um código JavaScript que inclua uma função chamada tratarErroPropriedadeInexistente(). Dentro dessa
função, siga estas etapas:
Declare uma variável chamada objeto e atribua a ela um objeto vazio {}. Utilize um bloco try...catch para lidar
com o erro que ocorre ao tentar acessar a propriedade inexistente. No bloco catch, exiba uma mensagem de erro personalizada usando console.error(). Esta mensagem deve informar que ocorreu um erro ao tentar
acessar uma propriedade que não existe no objeto e incluir o erro capturado na mensagem de erro. */

function tratarErroPropriedadeInexistente() {
  const objeto = {chave: 'valor'};
  try {
    console.log(objeto.chave);
  } catch (error) {
    console.error('Erro: A propriedade não existe no objeto: ', error)
  }
}

tratarErroPropriedadeInexistente();