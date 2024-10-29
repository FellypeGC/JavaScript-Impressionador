const produto = {
  nome: 'Laptop',
  preco: 2500,
  disponibilidade: true,
  emEstoque: 10
};

console.log(Object.keys(produto)); // Retorna as chaves (propriedades) do objeto em uma forma de array.
console.log(Object.values(produto)); // Retorna os valores das chaves do objeto em forma de array.
console.log(Object.entries(produto)); // Retorna arrays dentro de um array das chaves e valores do objeto.
