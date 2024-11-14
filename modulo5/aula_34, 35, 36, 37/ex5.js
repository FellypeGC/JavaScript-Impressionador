// Crie uma função que receba uma data e extraia o ano, mês e dia dessa data.
//  Exiba as informações no console.

function dateExtract() {
  let date = new Date('2024-10-07');

  console.log(`Ano: ${date.getFullYear()}`);
  console.log(`Mês: ${date.getMonth() + 1}`);
  console.log(`Dia: ${date.getDate()}`);
}

dateExtract();