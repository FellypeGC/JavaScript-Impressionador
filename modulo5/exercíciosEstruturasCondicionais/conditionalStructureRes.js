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

// Resolução Exercício 4
console.log('Resolução Exercício 4');

function desempenhoIndividualDeVendas(desempenhoDeUmVendedor) {
    if (desempenhoDeUmVendedor >= 99) {
        return 'Excelente Desempenho';
    } else if (desempenhoDeUmVendedor > 90) {
        return 'Muito Bom Desempenho';
    } else if (desempenhoDeUmVendedor >= 80 ) {
        return 'Bom Desempenho';
    } else if (desempenhoDeUmVendedor >= 61) {
        return 'Desempenho Satisfatório';
    } else {
        return 'Desempenho Insatisfatório';
    }
}

const vendedor1 = 99;
const vendedor2 = 95;
const vendedor3 = 88;
const vendedor4 = 67;
const vendedor5 = 30;

console.log(desempenhoIndividualDeVendas(vendedor1));
console.log(desempenhoIndividualDeVendas(vendedor2));
console.log(desempenhoIndividualDeVendas(vendedor3));
console.log(desempenhoIndividualDeVendas(vendedor4));
console.log(desempenhoIndividualDeVendas(vendedor5));


// Resolução Exercício 5
console.log('Resolução Exercício 5');

function verificarVelocidade(velocidadeDeUmVeículo) {
    if (velocidadeDeUmVeículo <= 80) {
        return true;
    } else {
        return false; 
    }
}

const carro1 = 50;
const carro2 = 105;

console.log(verificarVelocidade(carro1));
console.log(verificarVelocidade(carro2));

// Resolução Exercício 6
console.log('Resolução Exercício 6');

function mensagemSemaforo(corSemaforo) {
    const mensagem = 
    corSemaforo === 'vermelho'
    ? 'Pare o veículo'
    :corSemaforo === 'amarelo'
    ? 'Reduza a velocidade e pare se seguro.'
    : corSemaforo === 'verde'
    ? 'Você pode continuar com cuidado.'
    : 'Cor do Semáforo desconhecida. Siga com atenção';
    return mensagem;
}

const corSemaforoExemplo = 'verde';
const mensagem = mensagemSemaforo(corSemaforoExemplo);
console.log(mensagem);
const corSemaforoExemplo2 = 'vermelho';
const mensagem2 = mensagemSemaforo(corSemaforoExemplo2);
console.log(mensagem2);
const corSemaforoExemplo3 = 'amarelo';
const mensagem3 = mensagemSemaforo(corSemaforoExemplo3);
console.log(mensagem3);

// Resolução Exercício 7
console.log('Resolução Exercício 7');

function coresDoSemaforo(corSemaforoEx) {
    let mensagem;
    switch (corSemaforoEx) {
    case "vermelho":
    mensagem = "Pare o veículo imediatamente!";
    break;
    case "amarelo":
    mensagem = "Reduza a velocidade e pare se seguro.";
    break;
    case "verde":
    mensagem = "Você pode continuar com cuidado.";
    break;
    default:
    mensagem = "Cor do semáforo desconhecida. Siga com atenção.";
    }
    return mensagem;
   }
  
const corSemaforoExemploEx = "verde"; 
necessário
console.log(coresDoSemaforo(corSemaforoExemplo));

// Resolução Exercício 8
console.log('Resolução Exercício 8');

function verificarPlaca(ultimoDigitoPlaca) {
    let diaRodizio;
    switch (ultimoDigitoPlaca) {
    case 1:
    case 2:
    diaRodizio = "Segunda-feira";
    break;
    case 3:
    case 4:
    diaRodizio = "Terça-feira";
    break;
    case 5:
    case 6:
    diaRodizio = "Quarta-feira";
    break;
    case 7:
    case 8:
    diaRodizio = "Quinta-feira";
    break;
    case 9:
    case 0:
    diaRodizio = "Sexta-feira";
    break;
    default:
    diaRodizio = "Placa inválida";
    }
    return `O dia de rodízio é na ${diaRodizio}.`;
   }
   
   const ultimoDigitoPlacaExemplo = 3; 
   console.log(verificarPlaca(ultimoDigitoPlacaExemplo));