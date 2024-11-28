//? Exercício 15: Crie uma função que receba um array de nomes de investimentos que você
//? quer fazer e um segundo parâmetro com seu nome.

function gerarListaInvestimentos(investimentos, nome) {
  return investimentos.map((investimento) => {
    return {
      investimento,
      nome
    }
  });
}

const investimentos = [5000, 2000, 15000];
const nome = 'Maria';
//const resultado = gerarListaInvestimentos(investimentos, nome);

// console.log(resultado);

//? Exercício 16: Crie uma função que receba uma frase e codifique as vogais de acordo com a
//? seguinte substituição: a → 1, e → 2, i → 3, o → 4, u → 5. Crie uma segunda função que
//? decodifique a frase, revertendo as substituições.

function codificar(frase) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  const substituicoes = ['1', '2', '3', '4', '5'];

  let fraseCodificada = frase;

  for (let i = 0; i < vogais.length; i++) {
    const regex = new RegExp(vogais[i], 'g');
    fraseCodificada = fraseCodificada.replace(regex, substituicoes[i]);
  }

  return fraseCodificada;
}

function decodificar(frase) {
  const substituicoesReversas = ['a', 'e', 'i', 'o', 'u'];
  const codificacoes = ['1', '2', '3', '4', '5'];

  let fraseDecodificada = frase;

  for (let i = 0; i < codificacoes.length; i++) {
    const regex = new RegExp(codificacoes[i], 'g');
    fraseDecodificada = fraseDecodificada.replace(regex, substituicoesReversas[i]);
    fraseDecodificada.replace(fraseDecodificada[5], 'a');
  }

  return fraseDecodificada;
}

const frase = 'a casa e o sol';
const resultado = codificar(frase);
console.log(resultado);

const frase2 = '1 c1s2 2 4 s4l';
const resultado2 = decodificar(frase2);
console.log(resultado2);
