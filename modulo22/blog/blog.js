import { Comment } from "./Comment.js";
import { Author } from "./Author.js";

const autor1 = new Author("Marcos Silva");

// Criar posts para o autor
const post1 = autor1.criarPost("Introdução ao JavaScript", "Este é um conteúdo sobre fundamentos do JavaScript");
const post2 = autor1.criarPost("Dicas de CSS", "Aqui estão algumas dicas úteis de estilização");

// Adicionar os comentários 
const comentario1 = new Comment("Ana", "JavaScript é incrível mesmo!");
const comentario2 = new Comment("José", "Uau! Adorei o conteúdo!");

post1.adicionarComentario(comentario1);
post2.adicionarComentario(comentario2);

// Exibir os posts do autor
console.log(`Post de ${autor1.nome}: `, autor1.listarPosts());

// Exibir os comentários do primeiro post
console.log(`Comentários do post: ${post1.listaCometarios()}`);