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

// Ex - 4
let venda = { 
  cliente: "João",
  produto: "Bola",
  valor: 35,
}

let dataAtual = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;

venda.data = dataAtual;
delete venda.produto;

console.log(venda);

// Ex - 5
let estoque = [30, 31, 32, 33];
let novoEstoque = [...estoque];

novoEstoque[0] = 29;

console.log(novoEstoque); // Output: [ 29, 31, 32, 33 ]
console.log(estoque); // Output: [ 30, 31, 32, 33 ]


let funcionario = {
  nome: "Lucas",
  idade: 26,
}

let novoFuncionario = { ...funcionario }

novoFuncionario.nome = "Jonas";

console.log(novoFuncionario); // Output => nome: 'Jonas'
console.log(funcionario); // Output => nome: 'Lucas'