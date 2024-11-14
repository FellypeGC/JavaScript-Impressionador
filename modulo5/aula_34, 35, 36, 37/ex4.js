// Crie uma função que receba duas datas e calcule a diferença entre elas em dias.
//  Exiba o resultado no console.

function calcularDiferençaDatas(dataInicial, dataFinal) {
  let diferencaMilissegundos = new Date(dataFinal) - new Date(dataInicial);
  let diferencaEmDias = diferencaMilissegundos / (1000 * 60 * 60 * 24); 
  // milissegundos 1000 = 1 segundo => 60 converte segundos em minutos 60seg = 1min =>
  // 60 converter para minutos 60min = 1h => 24h = 1 dia.

  console.log(`A diferença entre as datas em dias é: ${diferencaEmDias} dias.`);
}

calcularDiferençaDatas('2024-01-01', '2024-10-07');