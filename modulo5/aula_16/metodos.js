const produto = {
  nome: 'Laptop',
  preco: 2500,
  disponibilidade: true,
};

Object.assign(produto, {  emEstoque: 10, categoria: 'Eletrônicos' }); // Adicionar novas propriedades.
console.log(produto);

Object.defineProperty(produto, 'disponibilidade', {value: false}); // Modificar o valor de uma propriedade existente.
console.log(produto);

const pessoa = {
  nome: 'Carlos',
  idade: 30
}

const trabalho = {
  profissao: 'Engenheiro',
  cidade: 'São Paulo'
}

const funcionario = {};
Object.assign(funcionario, pessoa, trabalho); // Copiar para um objeto destino
// console.log(funcionario);

Object.defineProperty(funcionario, 'salario', { // Adicionar uma nova propriedade
  value: 2000,
  enumerable: true,
  writable: true,
  configurable: true
});

delete funcionario.cidade;

console.log(funcionario);