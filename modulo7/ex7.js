/* Exercício 7: Manipulação de Arquivo com Try, Catch e Finally
Crie um código JavaScript que inclua uma função chamada lerArquivo(). Dentro dessa função, siga estas
etapas:
Tente ler um arquivo chamado "arquivo.txt" utilizando uma operação fictícia de leitura de arquivo. Utilize um
bloco try...catch para lidar com qualquer erro que ocorra durante a tentativa de leitura do arquivo. No bloco
try, se a leitura do arquivo for bem-sucedida, exiba o conteúdo do arquivo no console. No bloco catch, exiba
uma mensagem de erro personalizada informando que ocorreu um erro durante a leitura do arquivo. Utilize
um bloco finally para garantir que determinadas operações (por exemplo, fechar o arquivo, se necessário)
sejam executadas, independentemente de ocorrer um erro ou não. */

//Ficticia 
// function lerArquivo() {
//   try {
//     const conteudoDoArquivo = 'Este é o conteúdo do arquivo ficticio';
//     console.log('Conteúdo do arquivo:',conteudoDoArquivo);
//   } catch (error) {
//     console.error('Erro: Ocorreu o erro da leitura',error);
//   } finally {
//     console.log('Bloco finally está sendo executado, encerra a operação da nossa função');
//   }
// }

// lerArquivo();

//Módulo FS
const fs = require('fs');
function lerArquivoComFS() {
  try {
    const conteudoDoArquivo = fs.readFileSync('arquivo.txt','utf-8');
    console.log(conteudoDoArquivo);
  } catch (error) {
    console.error('Erro ao ler arquivo:',error.message);
  } finally {
    console.log('Bloco finally está sendo executado, encerra a operação da nossa função');
  }
}

lerArquivoComFS();