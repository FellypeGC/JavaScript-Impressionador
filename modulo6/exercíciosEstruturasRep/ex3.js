/* Exercício 3: Contagem de Dinheiro no Caixa */

function realizarVendas(totalDeVendas) {
  let dinheiroRecebido = 0;
  let vendasRealizadas = 0;
  let vendasConcluidas = false;

  while (!vendasConcluidas) {
    const valorDaVenda = 20;

    //Simular a venda
    dinheiroRecebido += valorDaVenda;
    vendasRealizadas++

    //Verificação se as vendas atingiram o número
    if (vendasRealizadas >= totalDeVendas) {
      vendasConcluidas = true;
    }
  }
  console.log(`Total de dinheiro recebido: R$${dinheiroRecebido.toFixed(2)}`);
}


const totalDeVendasHoje = 15;
realizarVendas(totalDeVendasHoje);