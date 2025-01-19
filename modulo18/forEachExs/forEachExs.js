const pacotes = [
  { destino: "Paris", preco: 3500, vagasDisponiveis: true },
  { destino: "Nova York", preco: 4200, vagasDisponiveis: false },
  { destino: "Rio de Janeiro", preco: 1500, vagasDisponiveis: true },
];

/* Exercício 1: Você possui uma lista de pacotes de viagem que contém informações sobre o
destino e o preço. Utilize o forEach para percorrer essa lista e exibir no terminal o nome de
cada destino acompanhado do seu respectivo preço. */

pacotes.forEach((pacote) => {
  const destinoPacote = pacote.destino;
  const precoPacote = pacote.preco;

  console.log(`Destino do pacote: ${destinoPacote}, Preço do pacote: ${precoPacote}`);
});

/* Exercício 2: Você precisa informar a disponibilidade de vagas para cada pacote. Para isso,
utilize o forEach para percorrer a mesma lista e exibir no terminal o nome de cada destino,
seguido da informação de se há vagas disponíveis ou se estão esgotadas. */

pacotes.forEach((pacote) => {
  const vagaDisponivel = pacote.vagasDisponiveis;
  const nomeDestino = pacote.destino;

  if (vagaDisponivel == true) {
    console.log(`Nome do destino: ${nomeDestino}. Há vaga disponível. (${vagaDisponivel})`);
  } else {
    console.log(`Nome do destino: ${nomeDestino}. Não há vaga disponível. (${vagaDisponivel})`);
  }
});

/* Exercício 3: Conte quantos destinos têm vagas disponíveis. Utilize o forEach para verificar a
disponibilidade de cada pacote e armazene a contagem. Exiba no terminal o total de destinos e
quais destinos possuem vagas disponíveis. */

let contador = 0;
let contadorDestinos = 0;
let destinosDisponiveis = [];

pacotes.forEach((pacote) => {
  const vagaDisponivel = pacote.vagasDisponiveis;
  if (vagaDisponivel == true) {
    contador += 1;
  } else {
    return;
  }
  contadorDestinos += pacote.destino;
  destinosDisponiveis.push(pacote.destino);
});
  
console.log(
  `Total de destinos: ${contadorDestinos}, Total de destinos com vagas disponíveis: ${contador}, Destinos disponíveis: ${destinosDisponiveis}`
);
