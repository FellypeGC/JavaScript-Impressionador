import Curso from "./Curso.js";
import Aluno from "./Aluno.js";

// Criar cursos
const cursoJS = new Curso("JavaScript", "JS101");
const cursoPy = new Curso("Python", "PY101");

// Criar os alunos
const aluno1 = new Aluno("Marcos Silva", "2025001");
const aluno2 = new Aluno("Ana Costa", "202348567");

// Matricular 
aluno1.matricular(cursoJS);
aluno1.matricular(cursoPy);
aluno2.matricular(cursoJS);
aluno2.matricular(cursoPy);

console.log(`Cursos de ${aluno1.nome}: `, aluno1.listarCursos());
console.log(`Alunos do curso ${cursoJS.nome}: `, cursoJS.listarAlunos());

console.log(cursoJS);
console.log(cursoPy);