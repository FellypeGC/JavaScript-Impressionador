const listaNotas = [
    { nome: 'Daniel', nota: 5 },
    { nome: 'Pedro', nota: 15 },
    { nome: 'Lucas', nota: 12 },
    { nome: 'Fabricio', nota: 16 },
    { nome: 'Izabelle', nota: 18 },
    { nome: 'Nathalia', nota: 20 },
    { nome: 'Amanda', nota: 20 },
    { nome: 'João', nota: 20 },
    { nome: 'Marcus', nota: 12 },
    { nome: 'Sergio', nota: 13 },
    { nome: 'Diego', nota: 14 },
    { nome: 'Renan', nota: 11 },
    { nome: 'Rodrigo', nota: 9 },
    { nome: 'Messi', nota: 0 },
    { nome: 'CR7', nota: 0},
];

//filter - Método responsável por gerar um novo array resultado de um filtro estabelecido pelo programador 
const alunosAprovados = listaNotas.filter(function (aluno){
    return aluno.nota >= 12;
})

console.log(alunosAprovados);

//find

const alunoQueTirouZero = listaNotas.find(function(aluno) {
    return aluno.nota === 0;
})

console.log(alunoQueTirouZero);

//map

const listaNomesAlunosAprovados = alunosAprovados.map(function (aluno) {
    return aluno.nome;
});

console.log(listaNomesAlunosAprovados);