/* Exercício 2: Leitura de Arquivo com Callback
Escreva uma função lerArquivo que aceita um nome de arquivo e uma função de retorno de chamada
(callback). A função deve ler o conteúdo do arquivo e passá-lo para a função de retorno de chamada. Por fim,
chame a função lerArquivo() usando um callback que faça o conteúdo do arquivo ser exibido no console. */
/* Dica: disponibilizamos um arquivo de texto para esse exercício. Coloque-o na mesma pasta do seu código
JavaScript pra facilitar a resolução.
Obs: Para esse exercício, aqui vai um trecho de código que mostra como disponibilizar no seu código as
funcionalidades de uso de arquivos com JavaScript/NodeJS. O Trecho abaixo deve ser utilizado para a leitura do
arquivo. */

/*
const fs = require('fs');
//o método readFile lê o conteúdo de um arquivo identificado
//por filename (coloque o nome do arquivo e o caminho dele,
// ex: './textoExercicio2.txt' ) e entrega esse conteúdo dentro //do objeto "data"
fs.readFile(filename, (err, data) => {
 if (err) {
 //Aqui escrevemos um tratamento para um erro na tentativa de leitura do aquivo
 return;
 }
 //Aqui escrevemos o que deve ser feito com o objeto "data"
});
*/

const fs = require('fs');

function readFile(file, callback) {
  fs.readFile(file, 'utf-8', (err, data) => {
    if(err) {
      console.log('Erro ao tentar acessar o arquivo', err.message);
      return;
    }
    callback(data);
  });
}

readFile('./textoExercicio2.txt', (content)=> {
  console.log(content);
});
