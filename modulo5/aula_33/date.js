// DATE

const dataAtual = new Date(); // Criamos uma instância
// console.log(dataAtual.getFullYear()); // Ano atual
// console.log(dataAtual.getMonth()); // Mês atual - 0 a 11 (0 será janeiro e 11 - será dezembro)
// console.log(dataAtual.getDate()); // Dia atual
// console.log(dataAtual.getHours()); // Hora atual
// console.log(dataAtual.getMinutes); // Minutos atuais
// console.log(dataAtual.getSeconds()); // Segundos atuais

let timestamp = dataAtual.getTime();
console.log(dataAtual);
console.log(timestamp);
// timestamp - representação numérica - data referência 1 de janeiro de 1970.
console.log(new Date(1731534802896));
console.log(new Date(1731534847603));

let agora = new Date('2024-11-13');
console.log(agora.getMonth() + 1);