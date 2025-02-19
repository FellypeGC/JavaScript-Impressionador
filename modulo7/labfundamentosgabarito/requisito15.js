// Crie uma função que receba um array de nomes de investimentos que você quer fazer e
// um segundo parâmetro com seu nome.
// Função: gerarListaInvestimentos
// Entrada: //const investimentos = [5000, 2000, 15000];
// const nome = "Maria";
// const resultado = gerarListaInvestimentos(investimentos1, nome1);

// Saída:
//[ { investimento: 2000, nome: "Maria" }, { investimento: 5000, nome: "Maria" }, { investimento: 15000, nome: "Maria" }]

const investimentos = [5000, 2000, 15000];
const nome = "Maria";

function gerarListaInvestimentos(investimentos, nome) {
  if (investimentos.length === 0) {
    return "Vazio!";
  }

  const lista = [];
  for (let investimento of investimentos) {
    lista.push({ investimento: investimento, nome: nome });
  }

  lista.sort((a, b) => (a.investimento > b.investimento ? 1 : -1)); // ordem simplesmente com valor de 1 e -1

  return lista;
}

console.log(gerarListaInvestimentos(investimentos, nome));
