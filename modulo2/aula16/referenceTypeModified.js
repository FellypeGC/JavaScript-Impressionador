const cartao1 = {
    nome: 'Jose da Silva',
    saldo: 10000000,
};

const cartao2 = cartao1;

console.log(cartao1);
console.log(cartao2);

cartao2.saldo -= 2000000;

console.log(cartao1);
console.log(cartao2);

const listaAlunos = ['Jose', 'Joao', 'Claudio'];
listaAlunos[3] = ['Renan', 'Hecio'];

console.log(listaAlunos);
