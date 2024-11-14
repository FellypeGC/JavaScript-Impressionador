// Crie uma função que receba a data de nascimento de uma pessoa e calcule sua
// idade com base na data atual. Exiba a idade no console.

let dataNascimento = '1990-05-15'

function calcularIdade(dataNascimento) {
  let nascimento = new Date(dataNascimento);
  let hoje = new Date(); // data atual

  // Calcular idade com base pela diferença dos anos
  let idade = hoje.getFullYear() - nascimento.getFullYear();

  // Criar a data do aniversário atual ano
  let aniversarioAtual = new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()); // Ano-Mês-Dia

  // Calcula diferença em milissegundos e converter em dias
  let diferencaDias = (hoje - aniversarioAtual) / (1000 * 60 * 60 * 24);

  //Ajuste de idade
  let ajuste = (diferencaDias < 0) * 1;
  // console.log(ajuste);

  idade = idade - ajuste; // 34 - 0; = 34 anos
  console.log(`Idade: ${idade}`);
}

// console.log(1000 * 60 * 60 * 24); // 86400000 milissegundos que 1 dia possui

calcularIdade(dataNascimento);