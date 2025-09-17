// Ex - 1
let produtos = ["Mousepad", "Monitor", "Mesa"];

console.log(produtos[1]);
produtos[2] = "Notebook";
console.log(produtos);

// Ex - 2
let clientes = ["Matheus", "João", "Lucas"];
console.log(clientes);

clientes.push("Marcos");
console.log(clientes);
clientes.pop();
console.log(clientes);

// Ex - 3
let produto = {
  nome: "Mouse",
  preco: 170,
  quantidade: 20_000,
}

console.log(produto.nome);

produto.preco = 165;
console.log(produto);

