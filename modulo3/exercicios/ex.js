// Exercício 1

const precoProduto = 200;
const desconto = 40;
const imposto = 12;
const precoFinal = precoProduto - (desconto - imposto);

console.log(`Preço final do produto:  ${precoFinal}`);

// Exercício 2

const produtoComprado = 100;
const vendaComLucro = produtoComprado + 30;

console.log(`Preço de venda do produto: ${vendaComLucro}`);

// Exercício 3

const orcamento = 250;
const desconto2 = 50;
const custoProduto = 300;
const custoProdutoComDesconto = custoProduto - desconto2;
const dentroDoOrcamento = orcamento >= custoProdutoComDesconto;

console.log(`Preço com desconto: R$${custoProdutoComDesconto}`);
console.log(`Está dentro do orçamento? ${dentroDoOrcamento}`);

// Exercício 4

const estoqueProdutos = "20"
const estoqueMinimoProdutos = 20;
const verificacaoQuantidadeProdutos = Number(estoqueProdutos) >= estoqueMinimoProdutos;

console.log(`A quantidade no estoque é suficiente: ${verificacaoQuantidadeProdutos}`);

// Exercício 5

const produtoDisponivel = true;
const qtdProdutos = 10;
const qtdMinNecProdutos = 15;

const verificacaoProdutoDisponivel = produtoDisponivel && qtdProdutos >= qtdMinNecProdutos;

console.log(`O produto está disponível e tem quantidade suficiente: ${verificacaoProdutoDisponivel}`);
console.log(`O produto está indisponível: ${!produtoDisponivel}`);