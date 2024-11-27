console.log('Exercício 1');
// let novoArray = arrayOriginal.map(callback(elmento, indice, array));

const salarios = [3000, 4500, 5000, 6000, 7500];
const novosSalarios = salarios.map(salario => Number((salario * 1.1).toFixed(0)));
// const novosSalarios = salarios.map(salario => Math.round(salario * 1.1));
console.log(novosSalarios);

console.log('Exercício 2');

const precoProdutos = [50, 100, 150, 200, 250];
const novosPrecos = precoProdutos.map((preco) => preco * 1.05);

console.log(novosPrecos);

console.log('Exercício 3');
const funcionarios = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

const funcionariosComID = funcionarios.map((nome, index) => ({
  id: index + 1,
  nome: nome
}));
console.log(funcionariosComID);