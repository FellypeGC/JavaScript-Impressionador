//? Requisito 5: Crie uma função que receba uma frase como parâmetro e retorne um array
//? contendo as palavras que compõem essa frase, separadas por espaços.
//? Função: dividirFrase

function dividirFrase(frase) {
  const fraseDividida = frase.split(" ");
  return fraseDividida;
}

console.log(dividirFrase('Esta é uma frase de exemplo'));

//? Requisito 6: Crie uma função que receba o número de vitórias e empates de um time e
//? retorne a quantidade total de pontos, sabendo que cada vitória vale 3 pontos e cada empate
//? vale 1 ponto.

function calcularPontos(wins, draws) {
  const victoryPoints = 3;
  const drawPoints = 1;

  return (victoryPoints * wins) + (drawPoints * draws);
}

console.log(calcularPontos(5, 2));