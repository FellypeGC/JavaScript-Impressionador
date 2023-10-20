// Resolução Exercício 1
console.log('Resolução Exercício 1');

function verificaDesconto(valorDaCompra) {
    if (valorDaCompra >= 100) {
        console.log(
            'Parabéns! Você tem direito ao desconto de 10%'
        );
        const valorComDesconto = valorDaCompra * 0.9;
        console.log(
            `Valor com desconto: R$ ${valorComDesconto}`
        )
    } else {
        console.log(
            'Infelizmente você não tem direito ao desconto de 10%. Somente compras de R$100,00 ou mais.'
        );
        console.log(
            `Valor da compra: R$ ${valorDaCompra}`
        );
    }
}

const valorDaCompra = 80;
const valorDaCompra2 = 120;

verificaDesconto(valorDaCompra);
verificaDesconto(valorDaCompra2);

// Resolução Exercício 2
console.log('Resolução Exercício 2');

function verificarEstoque(quantidadeDisponivel) {
    if (quantidadeDisponivel > 0) {
        return 'Produto disponível.';
    } else {
        return 'Produto esgotado';
    }
}

const quantidadeExemplo = 5;
const quantidadeExemplo2 = 0;

console.log(verificarEstoque(quantidadeExemplo));
console.log(verificarEstoque(quantidadeExemplo2));

// Resolução Exercício 3
console.log('Resolução Exercício 3');

function categoriaCliente(pontuaçãoDeFidelidade) {
    if (pontuaçãoDeFidelidade >= 85) {
        return 'Cliente Premium';
    } else if (pontuaçãoDeFidelidade >= 50) {
        return 'Cliente Regular';
    } else {
        return 'Cliente Comum';
    }
}

const pontuaçãoCliente1 = 86; 
const pontuaçãoCliente2 = 57; 
const pontuaçãoCliente3 = 40; 

console.log(categoriaCliente(pontuaçãoCliente1));
console.log(categoriaCliente(pontuaçãoCliente2));
console.log(categoriaCliente(pontuaçãoCliente3));