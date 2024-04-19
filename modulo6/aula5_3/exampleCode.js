const usuario = { nome: 'Daniel', idade: 29, time: 'Fluminense' };
const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Tricolor!';
const mensagemDeBoasVindas2 = 'Bem vindo, torcedor Rubro-Negro!';
const mensagemDeBoasVindas3 = 'Bem vindo, torcedor Vascaíno';
const mensagemDeBoasVindas4 = 'Bem vindo, Amante do Esporte';

if (usuario.time === 'Fluminense') {
    console.log(mensagemDeBoasVindas1);
} else if (usuario.time === 'Flamengo') {
    console.log(mensagemDeBoasVindas2);
} else if (usuario.time === 'Vasco') {
    console.log(mensagemDeBoasVindas3)
} else {
    console.log(mensagemDeBoasVindas4);
};


const mensagemDeEscolha = 'Clique no setor para qual deseja comprar seu ingresso!';
const mensagemFinal = 'Divirta-se no Maracanã!!!';

console.log(mensagemDeEscolha);
console.log(mensagemFinal);