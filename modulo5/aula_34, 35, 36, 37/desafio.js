// Crie uma função que receba uma data e a formate no padrão brasileiro (dia/mês/ano).
//  Exiba o resultado no console.

// function formatarPadraoBrasileiroDate(dataString) {
//   let data = new Date(dataString + "T00:00:00");

//   let dataFormatada = data.toLocaleDateString("pt-BR");
//   console.log("Data formatada no padrão brasileiro: " + dataFormatada);
// }

function formatoDataBRA() {
  let data = new Date('2024-10-07');

  const dia = data.getDate() + 1;
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  console.log(`Data formatada no padrão brasileiro: 0${dia}/${mes}/${ano}`);
}

formatoDataBRA();